import React from 'dom-chef';
import {elementExists} from 'select-dom';
import {$, $optional} from 'select-dom/strict.js';
import * as pageDetect from 'github-url-detection';
import delegate, {type DelegateEvent} from 'delegate-it';
import CheckIcon from 'octicons-plain-react/Check';

import features from '../feature-manager.js';
import observe from '../helpers/selector-observer.js';
import api from '../github-helpers/api.js';
import {getBranches} from '../github-helpers/pr-branches.js';
import getPrInfo from '../github-helpers/get-pr-info.js';
import showToast from '../github-helpers/toast.js';
import {getConversationNumber} from '../github-helpers/index.js';
import createMergeabilityRow from '../github-widgets/mergeability-row.js';
import {expectToken} from '../github-helpers/github-token.js';

const canNativelyUpdate = [
	'.js-update-branch-form', // Old view - TODO: Remove in July 2025
	'[aria-label="Update branch options"]',
];

async function mergeBranches(): Promise<AnyObject> {
	return api.v3(`pulls/${getConversationNumber()!}/update-branch`, {
		method: 'PUT',
		ignoreHTTPStatus: true,
	});
}

async function handler({delegateTarget: button}: DelegateEvent<MouseEvent, HTMLButtonElement>): Promise<void> {
	button.disabled = true;
	await showToast(async () => {
		// Reads Error#message or GitHub’s "message" response
		const response = await mergeBranches().catch(error => error);
		if (response instanceof Error || !response.ok) {
			throw new Error(`Error updating the branch: ${response.message as string}`, {cause: response});
		}
	}, {
		message: 'Updating branch…',
		doneMessage: 'Branch updated',
	});

	button.remove();
}

function createButton(): JSX.Element {
	return (
		<button
			type="button"
			className="btn btn-sm rgh-update-pr-from-base-branch tooltipped tooltipped-w"
			aria-label="Use Refined GitHub to update the PR from the base branch"
		>
			Update branch
		</button>
	);
}

async function addButton(mergeBar: Element): Promise<void> {
	if (elementExists(canNativelyUpdate)) {
		return;
	}

	const {base} = getBranches();
	const prInfo = await getPrInfo(base.relative);
	if (
		!prInfo.needsUpdate
		|| prInfo.mergeable === 'CONFLICTING'
		|| !(
			prInfo.viewerCanUpdate
			|| prInfo.viewerCanEditFiles
		)
	) {
		return;
	}

	const mergeabilityRow = $optional([
		'.branch-action-item:has(.merging-body)', // TODO: Drop after June 2025
		'[aria-label="Conflicts"] [class^="MergeBoxSectionHeader-module__wrapper"]',
	]);

	if (mergeabilityRow) {
		const isOldView = mergeBar.parentElement?.classList.contains('mergeability-details');
		const positionClass = isOldView
			? 'float-right'
			: 'flex-order-2 flex-self-center';

		mergeabilityRow.prepend(
			<div
				className={['branch-action-btn js-immediate-updates js-needs-timeline-marker-header', positionClass].join(' ')}
			>
				{createButton()}
			</div>,
		);
	} else {
		// Old view draft PRs require a new row to display the button
		// https://github.com/refined-github/refined-github/pull/8193#discussion_r1908581612
		mergeBar.before(createMergeabilityRow({
			className: 'rgh-update-pr-from-base-branch-row',
			action: createButton(),
			icon: <CheckIcon />,
			iconClass: 'completeness-indicator-success',
			heading: 'This branch has no conflicts with the base branch',
			meta: 'Merging can be performed automatically.',
		}));
	}
}

async function init(signal: AbortSignal): Promise<false | void> {
	await expectToken();

	delegate('.rgh-update-pr-from-base-branch', 'click', handler, {signal});
	observe([
		'.mergeability-details > *:last-child', // Old view - TODO: Drop after June 2025
		'[class^="MergeBox-module__mergePartialContainer"]',
	], addButton, {signal});
}

void features.add(import.meta.url, {
	include: [
		pageDetect.isPRConversation,
	],
	exclude: [
		pageDetect.isClosedConversation,
		() => $('.head-ref').title === 'This repository has been deleted',
	],
	awaitDomReady: true, // DOM-based exclusions
	init,
});

/*
Test URLs

PR without conflicts
https://github.com/refined-github/sandbox/pull/60

Draft PR without conflicts
https://github.com/refined-github/sandbox/pull/61

Native "Update branch" button
(pick a conflict-free PR from https://github.com/refined-github/refined-github/pulls?q=is%3Apr+is%3Aopen+sort%3Acreated-asc)

Native "Resolve conflicts" button
https://github.com/refined-github/sandbox/pull/9

Cross-repo PR with long branch names
https://github.com/refined-github/sandbox/pull/13

PRs to repos without write access, find one among your own PRs here:
https://github.com/pulls?q=is%3Apr+is%3Aopen+author%3A%40me+archived%3Afalse+-user%3A%40me

*/

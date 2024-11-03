import './refined-github.css';
import './github-helpers/heat-map.css';

// CSS-only features
import './features/github-bugs.css';
import './features/tab-size.css';
import './features/center-reactions-popup.css';
import './features/safer-destructive-actions.css';
import './features/clean-footer.css';
import './features/pr-approvals-count.css';
import './features/clean-conversations.css';
import './features/sticky-conversation-list-toolbar.css';
import './features/clean-notifications.css';
import './features/night-not-found.css';
import './features/sticky-file-header.css';
import './features/sticky-notifications-actions.css';
import './features/readable-title-change-events.css';
import './features/clean-checks-list.css';
import './features/sticky-csv-header.css';
import './features/mark-private-repos.css';
import './features/mobile-tabs.css';

// DO NOT add CSS files here if they are part of a JavaScript feature.
// Import the `.css` file from the `.tsx` instead.

// CSS-only disableable features
import './features/align-issue-labels.js';
import './features/clean-pinned-issues.js';
import './features/hide-diff-signs.js';
import './features/clean-rich-text-editor.js';

// Disableable features
import './features/useful-not-found-page.js';
import './features/more-dropdown-links.js';
import './features/releases-tab.js';
import './features/one-key-formatting.js';
import './features/tab-to-indent.js';
import './features/hide-navigation-hover-highlight.js';
import './features/selection-in-new-tab.js';
import './features/quick-comment-hiding.js';
import './features/quick-comment-edit.js';
import './features/open-all-notifications.js';
import './features/copy-on-y.js';
import './features/profile-hotkey.js';
import './features/close-out-of-view-modals.js';
import './features/improve-shortcut-help.js';
import './features/shorten-links.js';
import './features/linkify-code.js';
import './features/download-folder-button.js';
import './features/linkify-branch-references.js';
import './features/open-all-conversations.js';
import './features/pagination-hotkey.js';
import './features/conversation-links-on-repo-lists.js';
import './features/global-conversation-list-filters.js';
import './features/more-conversation-filters.js';
import './features/sort-conversations-by-update-time.js'; // Must be after global-conversation-list-filters and more-conversation-filters and conversation-links-on-repo-lists
import './features/pinned-issues-update-time.js';
import './features/default-branch-button.js';
import './features/one-click-diff-options.js';
import './features/ci-link.js';
import './features/sync-pr-commit-title.js';
import './features/hide-inactive-deployments.js';
import './features/pull-request-hotkeys.js';
import './features/one-click-review-submission.js';
import './features/embed-gist-inline.js';
import './features/comments-time-machine-links.js';
import './features/hide-issue-list-autocomplete.js';
import './features/esc-to-deselect-line.js';
import './features/create-release-shortcut.js';
import './features/patch-diff-links.js';
import './features/parse-backticks.js';
import './features/mark-merge-commits-in-list.js';
import './features/swap-branches-on-compare.js';
import './features/reactions-avatars.js';
import './features/show-names.js';
import './features/previous-next-commit-buttons.js';
import './features/extend-diff-expander.js';
import './features/profile-gists-link.js';
import './features/show-user-top-repositories.js';
import './features/hide-user-forks.js';
import './features/user-profile-follower-badge.js';
import './features/highlight-non-default-base-branch.js';
import './features/mark-private-orgs.js';
import './features/linkify-commit-sha.js';
import './features/warning-for-disallow-edits.js';
import './features/warn-pr-from-master.js';
import './features/preview-hidden-comments.js';
import './features/fit-textareas.js';
import './features/collapsible-content-button.js';
import './features/resolve-conflicts.js';
import './features/actionable-pr-view-file.js'; // Must be before more-file-links
import './features/more-file-links.js';
import './features/pr-filters.js';
import './features/quick-file-edit.js';
import './features/update-pr-from-base-branch.js';
import './features/tag-changes-link.js';
import './features/clean-conversation-sidebar.js';
import './features/sticky-sidebar.js';
import './features/release-download-count.js';
import './features/open-issue-to-latest-comment.js';
import './features/toggle-everything-with-alt.js';
import './features/suggest-commit-title-limit.js';
import './features/highest-rated-comment.js';
import './features/clean-conversation-filters.js';
import './features/tags-on-commits-list.js';
import './features/conventional-commits.js';
import './features/list-prs-for-file.js';
import './features/pr-branch-auto-delete.js';
import './features/linkify-symbolic-links.js'; // Must be before show-whitespace
import './features/show-whitespace.js';
import './features/restore-file.js';
import './features/hidden-review-comments-indicator.js';
import './features/reload-failed-proxied-images.js';
import './features/conversation-authors.js';
import './features/embed-gist-via-iframe.js';
import './features/one-click-pr-or-gist.js';
import './features/dim-bots.js';
import './features/conflict-marker.js';
import './features/html-preview-link.js';
import './features/linkify-user-location.js';
import './features/repo-age.js';
import './features/user-local-time.js';
import './features/quick-mention.js';
import './features/extend-conversation-status-filters.js';
import './features/expand-all-hidden-comments.js';
import './features/bugs-tab.js';
import './features/cross-deleted-pr-branches.js';
import './features/repo-wide-file-finder.js';
import './features/pr-commit-lines-changed.js';
import './features/show-open-prs-of-forks.js';
import './features/deep-reblame.js';
import './features/clear-pr-merge-commit-message.js';
import './features/action-used-by-link.js';
import './features/batch-mark-files-as-viewed.js';
import './features/unwrap-unnecessary-dropdowns.js';
import './features/linkify-notification-repository-header.js';
import './features/stop-redirecting-in-notification-bar.js';
import './features/prevent-link-loss.js';
import './features/closing-remarks.js';
import './features/show-associated-branch-prs-on-fork.js';
import './features/quick-review.js';
import './features/pr-jump-to-first-non-viewed-file.js';
import './features/keyboard-navigation.js';
import './features/vertical-front-matter.js';
import './features/pr-first-commit-title.js';
import './features/linkify-user-edit-history-popup.js';
import './features/clean-repo-filelist-actions.js';
import './features/prevent-duplicate-pr-submission.js';
import './features/quick-label-removal.js';
import './features/clean-conversation-headers.js';
import './features/new-or-deleted-file.js';
import './features/convert-release-to-draft.js';
import './features/new-repo-disable-projects-and-wikis.js';
import './features/table-input.js';
import './features/link-to-github-io.js';
import './features/github-actions-indicators.js';
import './features/convert-pr-to-draft-improvements.js';
import './features/unfinished-comments.js';
import './features/jump-to-change-requested-comment.js';
import './features/esc-to-cancel.js';
import './features/easy-toggle-files.js';
import './features/quick-repo-deletion.js';
import './features/clean-repo-sidebar.js';
import './features/rgh-feature-descriptions.js';
import './features/archive-forks-link.js';
import './features/link-to-changelog-file.js';
import './features/rgh-linkify-features.js';
import './features/conversation-activity-filter.js';
import './features/select-all-notifications-shortcut.js';
import './features/no-duplicate-list-update-time.js';
import './features/view-last-pr-deployment.js';
import './features/avoid-accidental-submissions.js';
import './features/quick-review-comment-deletion.js';
import './features/no-unnecessary-split-diff-view.js';
import './features/list-prs-for-branch.js';
import './features/select-notifications.js';
import './features/clean-repo-tabs.js';
import './features/rgh-options-link.js';
import './features/same-branch-author-commits.js';
import './features/prevent-pr-merge-panel-opening.js';
import './features/rgh-improve-new-issue-form.js';
import './features/easy-toggle-commit-messages.js';
import './features/command-palette-navigation-shortcuts.js';
import './features/link-to-compare-diff.js';
import './features/hide-low-quality-comments.js';
import './features/submission-via-ctrl-enter-everywhere.js';
import './features/linkify-user-labels.js';
import './features/repo-avatars.js';
import './features/jump-to-conversation-close-event.js';
import './features/last-notification-page-button.js';
import './features/rgh-linkify-yolo-issues.js';
import './features/quick-new-issue.js';
import './features/scrollable-areas.js';
import './features/emphasize-draft-pr-label.js';
import './features/file-age-color.js';
import './features/netiquette.js';
import './features/rgh-netiquette.js';
import './features/small-user-avatars.js';
import './features/releases-dropdown.js';
import './features/pr-base-commit.js';
import './features/unreleased-commits.js';
import './features/previous-version.js';
import './features/status-subscription.js';
import './features/action-pr-link.js';
import './features/rgh-dim-commits.js';
import './features/repo-header-info.js';
import './features/rgh-pr-template.js';
import './features/close-as-unplanned.js';
import './features/locked-issue.js';
import './features/visit-tag.js';
import './features/prevent-comment-loss.js';
import './features/fix-no-pr-search.js';
import './features/clean-readme-url.js';
import './features/pr-notification-link.js';
import './features/click-outside-modal.js';
import './features/comment-excess.js';
import './features/linkify-line-numbers.js';
import './features/sidebar-focus-file.js';
import './features/rgh-token-user.js';

/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   arc-menu.html
 */

/// <reference path="../polymer/types/polymer-element.d.ts" />
/// <reference path="../polymer/types/lib/utils/render-status.d.ts" />
/// <reference path="../saved-menu/saved-menu.d.ts" />
/// <reference path="../history-menu/history-menu.d.ts" />
/// <reference path="../rest-api-menu/rest-api-menu.d.ts" />
/// <reference path="../projects-menu/projects-menu.d.ts" />
/// <reference path="../iron-flex-layout/iron-flex-layout.d.ts" />
/// <reference path="../paper-tabs/paper-tabs.d.ts" />
/// <reference path="../paper-tabs/paper-tab.d.ts" />
/// <reference path="../paper-button/paper-button.d.ts" />
/// <reference path="../iron-collapse/iron-collapse.d.ts" />

declare namespace UiElements {

  /**
   * Side navigation for Advanced REST Client.
   *
   * ### Styling
   * `<arc-menu>` provides the following custom properties and mixins for styling:
   *
   * Custom property | Description | Default
   * ----------------|-------------|----------
   * `--arc-menu` | Mixin applied to the element | `{}`
   * `--arc-menu-bottom-actions` | Mixin applied to the bottom pane with additional actions. | `{}`
   * `--arc-menu-bottom-actions-button` | Mixin applied to the buttons in bottom action pane. | `{}`
   * `--arc-menu-bottom-actions-button-hover` | Mixin applied to the buttons in bottom action pane when hovering. | `{}`
   * `--arc-menu-tabs-color` | Color of the papaer tabs | ``
   * `--arc-menu-tabs-color-unselected` | Color of the papaer tabs when not selected | ``
   */
  class ArcMenu extends Polymer.Element {

    /**
     * Currently selected menu tab
     */
    selected: number|null|undefined;
    _savedWarningOpened: boolean|null|undefined;

    /**
     * Changes information density of list items.
     * By default it uses material's peper item with two lines (72px heigth)
     * Possible values are:
     *
     * - `default` or empty - regular list view
     * - `comfortable` - enables MD single line list item vie (52px heigth)
     * - `compact` - enables list that has 40px heigth (touch recommended)
     */
    listType: string|null|undefined;

    /**
     * If set the history menu is rendered. This cames from application
     * settings and is different from `noHistory` which is intended to
     * temporaily remove the history from the view (for menu popup option)
     */
    historyEnabled: boolean|null|undefined;

    /**
     * When set it hiddes history from the view
     */
    hideHistory: boolean|null|undefined;

    /**
     * When set it hiddes saved list from the view
     */
    hideSaved: boolean|null|undefined;

    /**
     * When set it hiddes projects from the view
     */
    hideProjects: boolean|null|undefined;

    /**
     * When set it hiddes APIs list from the view
     */
    hideApis: boolean|null|undefined;

    /**
     * Renders popup menu buttons when this property is set.
     */
    allowPopup: boolean|null|undefined;
    _selectedChanged(selected: any): void;
    _navigateScreen(base: any): void;
    _openHistoryList(): void;
    _openSavedList(): void;
    _openApisList(): void;
    _exporeApis(): void;
    _refreshList(type: any): void;

    /**
     * Forces to refresh history list
     */
    refreshHistoryList(): void;

    /**
     * Forces to refresh saved list
     */
    refreshSavedList(): void;

    /**
     * Forces to refresh projects list
     */
    refreshProjectsList(): void;

    /**
     * Forces to refresh apis list
     */
    refreshApisList(): void;

    /**
     * Dispatches `popup-menu` custom event
     *
     * @param type Panel name
     */
    _popupMenu(type: String|null): void;

    /**
     * Requests to popup history menu.
     */
    popupHistory(): void;

    /**
     * Requests to popup saved menu.
     */
    popupSaved(): void;

    /**
     * Requests to popup projects menu.
     */
    popupProjects(): void;

    /**
     * Requests to popup apis menu.
     */
    popupApis(): void;
    _toggleSavedWarning(): void;
    _openSavedRemovalTicket(): void;

    /**
     * Computes condition value if history menu should be rendered
     *
     * @param selected Currently selected panel
     */
    _computeHistoryOpened(selected: Number|null, historyEnabled: Boolean|null, hideHistory: Boolean|null): Boolean|null;

    /**
     * Computes condition value if saved menu should be rendered
     *
     * @param selected Currently selected panel
     */
    _computeSavedOpened(selected: Number|null, hideSaved: Boolean|null): Boolean|null;

    /**
     * Computes condition value if projects menu should be rendered
     *
     * @param selected Currently selected panel
     */
    _computeProjectsOpened(selected: Number|null, hideProjects: Boolean|null): Boolean|null;

    /**
     * Computes condition value if saved apis should be rendered
     *
     * @param selected Currently selected panel
     */
    _computeApisOpened(selected: Number|null, hideApis: Boolean|null): Boolean|null;

    /**
     * Calls `notifyResize()` of the tabs to re-render selection.
     */
    _rerenderTabs(): void;

    /**
     * Selects first panel that is not hidden
     */
    _selectFirstAvailable(): void;

    /**
     * Calls `_selectFirstAvailable()` if `panelId` is current selection.
     */
    _updateSelectionIfNeeded(panelId: Number|null): void;

    /**
     * Updates selection when history panel is removed
     */
    _hideHistoryChanegd(val: Boolean|null): void;

    /**
     * Updates selection when saved panel is removed
     */
    _hideSavedChanegd(val: Boolean|null): void;

    /**
     * Updates selection when saved panel is removed
     */
    _hideProjectsChanegd(val: Boolean|null): void;

    /**
     * Updates selection when saved panel is removed
     */
    _hideApisChanegd(val: Boolean|null): void;

    /**
     * Updates selection when history is disabled/enabled
     */
    _historyEnabledChanegd(val: Boolean|null, old: Boolean|null): void;
  }
}

interface HTMLElementTagNameMap {
  "arc-menu": UiElements.ArcMenu;
}
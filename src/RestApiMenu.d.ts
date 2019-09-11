/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   src/RestApiMenu.js
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.
// tslint:disable:no-any describes the API as best we are able today

import {LitElement, html, css} from 'lit-element';

import {ArcFileDropMixin} from '@advanced-rest-client/arc-file-drop-mixin/arc-file-drop-mixin.js';

import {AnypointMenuMixin} from '@anypoint-web-components/anypoint-menu-mixin/anypoint-menu-mixin.js';

export {RestApiMenuWrapper};

declare class RestApiMenuWrapper {
  render(): any;
}

export {RestApiMenu};

declare namespace UiElements {

  /**
   * A quick access menu for REST API projects
   *
   * A list of REST APIs in the ARC main menu.
   * The element uses direct implementation of the PouchDB to make a query to the
   * datastore.
   * It also listens to `datastore-destroyed` custom event update state of the list
   * items when datastore was destroyed.
   *
   * It listens for `selected-rest-api-changed` custom event as an alternative
   * to setting `selectedApi` property directly on the element.
   *
   * ### Example
   *
   * ```html
   * <rest-api-menu selectedapi="${route.api}"></rest-api-menu>
   * ```
   *
   * ### Datastore access
   *
   * This element uses events API to access datastore data. This is provided by the
   * `arc-models/rest-api-model` element. See documentation for this element if you
   * need to implement own data exchange logic.
   *
   * Datastore element is not in the shadow DOM of this element and is should be
   * included in the application DOM.
   *
   * ```html
   * <rest-api-menu selectedapi="${route.api}"></rest-api-menu>
   * <rest-api-model></rest-api-model>
   * ```
   */
  class RestApiMenu extends
    ArcFileDropMixin(
    Object) {

    /**
     * Computed value. `true` if the `items` property has values.
     */
    readonly hasItems: Boolean|null;

    /**
     * Computed value. True if query ended and there's no results.
     */
    readonly dataUnavailable: Boolean|null;
    readonly modelTemplate: any;
    readonly apiModel: any;

    /**
     * Saved items restored from the datastore.
     */
    items: Array<object|null>|null;

    /**
     * True when the element is querying the database for the data.
     */
    querying: boolean|null|undefined;

    /**
     * Currently selected project ID
     */
    selectedApi: string|null|undefined;

    /**
     * Page token for datastore pagination
     */
    nextPageToken: string|null|undefined;

    /**
     * When set the element won't query for APIs data when connected to the DOM.
     * In this case manually call `makeQuery()`
     */
    noAutoQuery: boolean|null|undefined;

    /**
     * Enables compatibility with Anypoint platform
     */
    compatibility: boolean|null|undefined;

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
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(): void;

    /**
     * Handler for `data-imported` cutom event.
     * Refreshes data state.
     */
    _dataImportHandler(): void;

    /**
     * Resets the state of the variables.
     */
    reset(): void;

    /**
     * Refreshes the data from the datastore.
     * It resets the query options, clears items and makes a query to the datastore.
     */
    refresh(): void;

    /**
     * Handler for the `datastore-destroyed` custom event
     */
    _onDatabaseDestroy(e: any): void;

    /**
     * The function to call when new query for data is needed.
     * Use this intead of `loadPage()` as this function uses debouncer to
     * prevent multiple calls at once.
     */
    makeQuery(): void;
    _getApiListOptions(): any;

    /**
     * Performs the query and processes the result.
     * This function immediately queries the data model for data.
     * It does this in a loop until all data are read.
     */
    loadPage(): Promise<any>|null;

    /**
     * Sorts projects list by `order` and the `title` properties.
     */
    _sortData(a: object|null, b: object|null): Number|null;

    /**
     * Handler for the `click` event on the list item.
     */
    _openAPI(e: any): void;

    /**
     * Handler for the `selected-rest-api-changed` event.
     * It expects the detail object to have `value` property with selection id.
     */
    _selecteApiHandler(e: CustomEvent|null): void;

    /**
     * Index item has been changed and should be updated / added.
     * Only non-cancelable event is considered.
     */
    _indexUpdated(e: CustomEvent|null): void;

    /**
     * Handler for API delete event.
     * Only non-cancelable event is considered.
     */
    _indexDeleted(e: CustomEvent|null): void;
    _selectionChanged(e: any): void;
    _dropTargetTemplate(): any;
    _unavailableTemplate(): any;
    _listTemplate(): any;
    render(): any;
  }
}

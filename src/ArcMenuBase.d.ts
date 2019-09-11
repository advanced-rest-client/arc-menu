/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   src/ArcMenuBase.js
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.
// tslint:disable:no-any describes the API as best we are able today

import {LitElement} from 'lit-element';

import {UuidGenerator} from '@advanced-rest-client/uuid-generator/UuidGenerator.js';

export {ArcMenuBase};

/**
 * Base class for ARC menu elements.
 */
declare class ArcMenuBase extends LitElement {
  constructor();

  /**
   * Prepares dropped request object to be stored in the data store.
   *
   * @returns Copy of the request object
   */
  _prepareDropRequest(request: object|null): object|null;

  /**
   * Adds dropped request to a project.
   *
   * @param project Project model
   * @param request Request model
   * @param opts Append options:
   * - index {Number} - Insert request in the project at this position. Default 0.
   * - forceRequestUpdate {Boolean} - Forces the request to be updated event when order do not change
   */
  _appendProjectRequest(project: object|null, request: object|null, opts: object|null): Promise<any>|null;

  /**
   * Dispatches `process-error` so the application can notify user about the event.
   *
   * @param cause Error object
   * @returns Disaptched custom event
   */
  _dispatchProcessError(cause: Error|null): CustomEvent|null;

  /**
   * Computes command label depending on a OS.
   * For Mac it will be cmd + `key` and for the rest of the World it
   * will be ctrl + `key`.
   *
   * @param key The key combination as a sufix after the command key
   * @param platform Current platform name. `navigator.platform` is used by default.
   * @returns Full command to display in command label.
   */
  _computeA11yCommand(key: String|null, platform: String|null): String|null;

  /**
   * Computes value for `dropEffect` property of the `DragEvent`.
   *
   * @returns Either `copy` or `move`.
   */
  _computeProjectDropEffect(e: DragEvent|null): String|null;

  /**
   * Handles logic when drop event is `move` in effect.
   * Removes reference to old project (if exists). It uses `arc-source/project-detail`
   * data from event which should hold project ID.
   *
   * @param request Request object
   * @returns True if the request object changed.
   */
  _handleProjectMoveDrop(e: DragEvent|null, request: object|null): Boolean|null;
}

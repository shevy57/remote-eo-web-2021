import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Connector1, { schema } from './model'

const router = new Router()
const { name, parentConnectorId, connectorSetName, system, uri, countUri, dependentOnQueries, dependencies, exports, token, maxPageCount, fields, lastPulled, webCallEvalStatement } = schema.tree

/**
 * @api {post} /connector1 Create connector 1
 * @apiName CreateConnector1
 * @apiGroup Connector1
 * @apiParam name Connector 1's name.
 * @apiParam parentConnectorId Connector 1's parentConnectorId.
 * @apiParam connectorSetName Connector 1's connectorSetName.
 * @apiParam system Connector 1's system.
 * @apiParam uri Connector 1's uri.
 * @apiParam countUri Connector 1's countUri.
 * @apiParam dependentOnQueries Connector 1's dependentOnQueries.
 * @apiParam dependencies Connector 1's dependencies.
 * @apiParam exports Connector 1's exports.
 * @apiParam token Connector 1's token.
 * @apiParam maxPageCount Connector 1's maxPageCount.
 * @apiParam fields Connector 1's fields.
 * @apiParam lastPulled Connector 1's lastPulled.
 * @apiParam webCallEvalStatement Connector 1's webCallEvalStatement.
 * @apiSuccess {Object} connector1 Connector 1's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Connector 1 not found.
 */
router.post('/',
  body({ name, parentConnectorId, connectorSetName, system, uri, countUri, dependentOnQueries, dependencies, exports, token, maxPageCount, fields, lastPulled, webCallEvalStatement }),
  create)

/**
 * @api {get} /connector1 Retrieve connector 1 s
 * @apiName RetrieveConnector1S
 * @apiGroup Connector1
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of connector 1 s.
 * @apiSuccess {Object[]} rows List of connector 1 s.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /connector1/:id Retrieve connector 1
 * @apiName RetrieveConnector1
 * @apiGroup Connector1
 * @apiSuccess {Object} connector1 Connector 1's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Connector 1 not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /connector1/:id Update connector 1
 * @apiName UpdateConnector1
 * @apiGroup Connector1
 * @apiParam name Connector 1's name.
 * @apiParam parentConnectorId Connector 1's parentConnectorId.
 * @apiParam connectorSetName Connector 1's connectorSetName.
 * @apiParam system Connector 1's system.
 * @apiParam uri Connector 1's uri.
 * @apiParam countUri Connector 1's countUri.
 * @apiParam dependentOnQueries Connector 1's dependentOnQueries.
 * @apiParam dependencies Connector 1's dependencies.
 * @apiParam exports Connector 1's exports.
 * @apiParam token Connector 1's token.
 * @apiParam maxPageCount Connector 1's maxPageCount.
 * @apiParam fields Connector 1's fields.
 * @apiParam lastPulled Connector 1's lastPulled.
 * @apiParam webCallEvalStatement Connector 1's webCallEvalStatement.
 * @apiSuccess {Object} connector1 Connector 1's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Connector 1 not found.
 */
router.put('/:id',
  body({ name, parentConnectorId, connectorSetName, system, uri, countUri, dependentOnQueries, dependencies, exports, token, maxPageCount, fields, lastPulled, webCallEvalStatement }),
  update)

/**
 * @api {delete} /connector1/:id Delete connector 1
 * @apiName DeleteConnector1
 * @apiGroup Connector1
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Connector 1 not found.
 */
router.delete('/:id',
  destroy)

export default router

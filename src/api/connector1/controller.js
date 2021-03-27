import { success, notFound } from '../../services/response/'
import { Connector1 } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Connector1.create(body)
    .then((connector1) => connector1.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Connector1.count(query)
    .then(count => Connector1.find(query, select, cursor)
      .then((connector1S) => ({
        count,
        rows: connector1S.map((connector1) => connector1.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Connector1.findById(params.id)
    .then(notFound(res))
    .then((connector1) => connector1 ? connector1.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Connector1.findById(params.id)
    .then(notFound(res))
    .then((connector1) => connector1 ? Object.assign(connector1, body).save() : null)
    .then((connector1) => connector1 ? connector1.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Connector1.findById(params.id)
    .then(notFound(res))
    .then((connector1) => connector1 ? connector1.remove() : null)
    .then(success(res, 204))
    .catch(next)

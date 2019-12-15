import boom from "@hapi/boom";
import * as Joi from "@hapi/joi";
import Koa from "koa";
import * as bus from "../services/bus";

const defaults = {
  limit: 5,
  offset: 0,
}

export async function list(ctx: Koa.Context): Promise<void> {
    const schema = Joi.object().keys({
        limit: Joi.number().integer().default(defaults.limit),
        offset: Joi.number().integer().default(defaults.offset)
    });

    const { error, value } = schema.validate({
        limit: ctx.query.limit,
        offset: ctx.query.offset
    });

    if(error){
        throw boom.badRequest("Enter valid limit and offset");
    }

    const[ count, rows ] = await bus.list(value.offset, value.limit)

    ctx.body = {
        buses: rows,
        total: count
    };

}

export async function create(ctx: Koa.Context): Promise<void> {
    const schema = Joi.object().keys({
        route: Joi.array().items(Joi.string())
    });

    const { error, value } = schema.validate({
        route: ctx.request.body.route
    });
    
    ctx.body = await bus.create(value.route);
}
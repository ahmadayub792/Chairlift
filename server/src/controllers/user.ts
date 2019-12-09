import boom from "@hapi/boom";
import * as Joi from "@hapi/joi";
import Koa from "koa";
import * as user from "../services/user";

const defaults = {
  limit: 5,
  offset: 0,
}

export async function create(ctx: Koa.Context): Promise<void> {
  
  const schema = Joi.object().keys({
    username: Joi.string().min(8).max(255).required(),
    password: Joi.string().min(8).max(30).required(),
    status: Joi.string()
  });

  const { error, value } = schema.validate({
    username: ctx.request.body.username,
    password: ctx.request.body.password,
  });

  if(error) {
    console.log("error pay error");
    throw boom.badRequest(error.message);
  }

  ctx.body = await user.create(value.username, value.password);

}
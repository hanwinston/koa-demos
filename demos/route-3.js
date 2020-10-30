const Koa = require('koa');
const route = require('koa-route');
const app = new Koa();

const about = ctx => {
  ctx.response.type = 'json';
  ctx.response.body = { data: 'about page' };
};

const contact = ctx => {
  ctx.response.type = 'json';
  ctx.response.body = { data: 'contact info' };
};

const main = ctx => {
  ctx.response.type = 'json';
  ctx.response.body = { data: 'This is index' };
};


app.use(route.get('/', main));
app.use(route.get('/about', about));
app.use(route.get('/contact', contact));

app.listen(3000);

import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _22ce1442 = () => interopDefault(import('..\\pages\\about-us.vue' /* webpackChunkName: "pages/about-us" */))
const _32e813ae = () => interopDefault(import('..\\pages\\award.vue' /* webpackChunkName: "pages/award" */))
const _ab29d562 = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _6012f5b6 = () => interopDefault(import('..\\pages\\diversity.vue' /* webpackChunkName: "pages/diversity" */))
const _6b62621e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _4ab0d832 = () => interopDefault(import('..\\pages\\index copy.vue' /* webpackChunkName: "pages/index copy" */))
const _c70369b4 = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _3c3a5f8c = () => interopDefault(import('..\\pages\\membership.vue' /* webpackChunkName: "pages/membership" */))
const _c645b0fa = () => interopDefault(import('..\\pages\\recognition.vue' /* webpackChunkName: "pages/recognition" */))
const _73b097c2 = () => interopDefault(import('..\\pages\\services.vue' /* webpackChunkName: "pages/services" */))
const _71b4e78b = () => interopDefault(import('..\\pages\\sustainability.vue' /* webpackChunkName: "pages/sustainability" */))
const _bb2a9f9e = () => interopDefault(import('..\\pages\\newsroom\\knowledgecenter.vue' /* webpackChunkName: "pages/newsroom/knowledgecenter" */))
const _7c061a6a = () => interopDefault(import('..\\pages\\newsroom\\main.vue' /* webpackChunkName: "pages/newsroom/main" */))
const _15a15ae5 = () => interopDefault(import('..\\pages\\newsroom\\news.vue' /* webpackChunkName: "pages/newsroom/news" */))
const _dd8c636a = () => interopDefault(import('..\\pages\\newsroom\\newsletter.vue' /* webpackChunkName: "pages/newsroom/newsletter" */))
const _a29a1e7c = () => interopDefault(import('..\\pages\\our-people\\profile\\_lawyerId\\_title.vue' /* webpackChunkName: "pages/our-people/profile/_lawyerId/_title" */))
const _5734bb70 = () => interopDefault(import('..\\pages\\newsletterNew\\_newsletterId.vue' /* webpackChunkName: "pages/newsletterNew/_newsletterId" */))
const _a48a5c34 = () => interopDefault(import('..\\pages\\our-people\\_countryId.vue' /* webpackChunkName: "pages/our-people/_countryId" */))
const _04d01606 = () => interopDefault(import('..\\pages\\searcher\\_textToSearch.vue' /* webpackChunkName: "pages/searcher/_textToSearch" */))
const _8b5aeb5a = () => interopDefault(import('..\\pages\\detailService\\_id\\_title.vue' /* webpackChunkName: "pages/detailService/_id/_title" */))
const _d5fd5330 = () => interopDefault(import('..\\pages\\detailNew\\_articleId\\_newsType\\_title.vue' /* webpackChunkName: "pages/detailNew/_articleId/_newsType/_title" */))
const _248d4b08 = () => interopDefault(import('~/pages/about-us.vue' /* webpackChunkName: "" */))
const _756fce88 = () => interopDefault(import('~/pages/services.vue' /* webpackChunkName: "" */))
const _6877a523 = () => interopDefault(import('~/pages/award.vue' /* webpackChunkName: "" */))
const _3937b295 = () => interopDefault(import('~/pages/contact-us.vue' /* webpackChunkName: "" */))
const _061e271f = () => interopDefault(import('~/pages/diversity.vue' /* webpackChunkName: "" */))
const _2563ddd0 = () => interopDefault(import('~/pages/index.vue' /* webpackChunkName: "" */))
const _70af6d80 = () => interopDefault(import('~/pages/membership.vue' /* webpackChunkName: "" */))
const _30b79a06 = () => interopDefault(import('~/pages/recognition.vue' /* webpackChunkName: "" */))
const _62c571d1 = () => interopDefault(import('~/pages/sustainability.vue' /* webpackChunkName: "" */))
const _55d7989c = () => interopDefault(import('~/pages/newsroom/knowledgecenter.vue' /* webpackChunkName: "" */))
const _3d2d1f40 = () => interopDefault(import('~/pages/newsroom/main.vue' /* webpackChunkName: "" */))
const _de5cf14c = () => interopDefault(import('~/pages/newsroom/news.vue' /* webpackChunkName: "" */))
const _b05be200 = () => interopDefault(import('~/pages/newsroom/newsletter.vue' /* webpackChunkName: "" */))
const _c59fb61e = () => interopDefault(import('~/pages/newsletterNew/_newsletterId.vue' /* webpackChunkName: "" */))
const _206f0ed5 = () => interopDefault(import('~/pages/our-people/profile/_lawyerId/_title.vue' /* webpackChunkName: "" */))
const _717d151f = () => interopDefault(import('~/pages/searcher/_textToSearch.vue' /* webpackChunkName: "" */))
const _022e5452 = () => interopDefault(import('~/pages/our-people/_countryId.vue' /* webpackChunkName: "" */))
const _18bfedc3 = () => interopDefault(import('~/pages/detailService/_id/_title.vue' /* webpackChunkName: "" */))
const _5186f23f = () => interopDefault(import('~/pages/detailNew/_articleId/_newsType/_title.vue' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about-us",
    component: _22ce1442,
    name: "about-us___es"
  }, {
    path: "/award",
    component: _32e813ae,
    name: "award___es"
  }, {
    path: "/contact-us",
    component: _ab29d562,
    name: "contact-us___es"
  }, {
    path: "/diversity",
    component: _6012f5b6,
    name: "diversity___es"
  }, {
    path: "/en",
    component: _6b62621e,
    name: "index___en"
  }, {
    path: "/index%20copy",
    component: _4ab0d832,
    name: "index copy___es"
  }, {
    path: "/inspire",
    component: _c70369b4,
    name: "inspire___es"
  }, {
    path: "/membership",
    component: _3c3a5f8c,
    name: "membership___es"
  }, {
    path: "/recognition",
    component: _c645b0fa,
    name: "recognition___es"
  }, {
    path: "/services",
    component: _73b097c2,
    name: "services___es"
  }, {
    path: "/sustainability",
    component: _71b4e78b,
    name: "sustainability___es"
  }, {
    path: "/en/about-us",
    component: _22ce1442,
    name: "about-us___en"
  }, {
    path: "/en/award",
    component: _32e813ae,
    name: "award___en"
  }, {
    path: "/en/contact-us",
    component: _ab29d562,
    name: "contact-us___en"
  }, {
    path: "/en/diversity",
    component: _6012f5b6,
    name: "diversity___en"
  }, {
    path: "/en/index%20copy",
    component: _4ab0d832,
    name: "index copy___en"
  }, {
    path: "/en/inspire",
    component: _c70369b4,
    name: "inspire___en"
  }, {
    path: "/en/membership",
    component: _3c3a5f8c,
    name: "membership___en"
  }, {
    path: "/en/recognition",
    component: _c645b0fa,
    name: "recognition___en"
  }, {
    path: "/en/services",
    component: _73b097c2,
    name: "services___en"
  }, {
    path: "/en/sustainability",
    component: _71b4e78b,
    name: "sustainability___en"
  }, {
    path: "/newsroom/knowledgecenter",
    component: _bb2a9f9e,
    name: "newsroom-knowledgecenter___es"
  }, {
    path: "/newsroom/main",
    component: _7c061a6a,
    name: "newsroom-main___es"
  }, {
    path: "/newsroom/news",
    component: _15a15ae5,
    name: "newsroom-news___es"
  }, {
    path: "/newsroom/newsletter",
    component: _dd8c636a,
    name: "newsroom-newsletter___es"
  }, {
    path: "/en/newsroom/knowledgecenter",
    component: _bb2a9f9e,
    name: "newsroom-knowledgecenter___en"
  }, {
    path: "/en/newsroom/main",
    component: _7c061a6a,
    name: "newsroom-main___en"
  }, {
    path: "/en/newsroom/news",
    component: _15a15ae5,
    name: "newsroom-news___en"
  }, {
    path: "/en/newsroom/newsletter",
    component: _dd8c636a,
    name: "newsroom-newsletter___en"
  }, {
    path: "/",
    component: _6b62621e,
    name: "index___es"
  }, {
    path: "/en/our-people/profile/:lawyerId?/:title?",
    component: _a29a1e7c,
    name: "our-people-profile-lawyerId-title___en"
  }, {
    path: "/en/newsletterNew/:newsletterId?",
    component: _5734bb70,
    name: "newsletterNew-newsletterId___en"
  }, {
    path: "/en/our-people/:countryId?",
    component: _a48a5c34,
    name: "our-people-countryId___en"
  }, {
    path: "/en/searcher/:textToSearch?",
    component: _04d01606,
    name: "searcher-textToSearch___en"
  }, {
    path: "/en/detailService/:id?/:title?",
    component: _8b5aeb5a,
    name: "detailService-id-title___en"
  }, {
    path: "/our-people/profile/:lawyerId?/:title?",
    component: _a29a1e7c,
    name: "our-people-profile-lawyerId-title___es"
  }, {
    path: "/en/detailNew/:articleId?/:newsType?/:title?",
    component: _d5fd5330,
    name: "detailNew-articleId-newsType-title___en"
  }, {
    path: "/newsletterNew/:newsletterId?",
    component: _5734bb70,
    name: "newsletterNew-newsletterId___es"
  }, {
    path: "/our-people/:countryId?",
    component: _a48a5c34,
    name: "our-people-countryId___es"
  }, {
    path: "/searcher/:textToSearch?",
    component: _04d01606,
    name: "searcher-textToSearch___es"
  }, {
    path: "/en/:language/about-us",
    component: _248d4b08
  }, {
    path: "/en/:language/areas-practica",
    component: _756fce88
  }, {
    path: "/en/:language/awards",
    component: _6877a523
  }, {
    path: "/en/:language/contact-us",
    component: _3937b295
  }, {
    path: "/en/:language/contacto",
    component: _3937b295
  }, {
    path: "/en/:language/diversidad",
    component: _061e271f
  }, {
    path: "/en/:language/diversity",
    component: _061e271f
  }, {
    path: "/en/:language/home",
    component: _2563ddd0
  }, {
    path: "/en/:language/inicio",
    component: _2563ddd0
  }, {
    path: "/en/:language/memberships",
    component: _70af6d80
  }, {
    path: "/en/:language/membresias",
    component: _70af6d80
  }, {
    path: "/en/:language/practice-areas",
    component: _756fce88
  }, {
    path: "/en/:language/premios",
    component: _6877a523
  }, {
    path: "/en/:language/recognitions",
    component: _30b79a06
  }, {
    path: "/en/:language/reconocimientos",
    component: _30b79a06
  }, {
    path: "/en/:language/sobre-nosotros",
    component: _248d4b08
  }, {
    path: "/en/:language/sostenibilidad",
    component: _62c571d1
  }, {
    path: "/en/:language/sustainability",
    component: _62c571d1
  }, {
    path: "/en/:language/newsroom/knowledgecenter",
    component: _55d7989c
  }, {
    path: "/en/:language/newsroom/knowledgecenter",
    component: _55d7989c
  }, {
    path: "/en/:language/newsroom/main",
    component: _3d2d1f40
  }, {
    path: "/en/:language/newsroom/main",
    component: _3d2d1f40
  }, {
    path: "/en/:language/newsroom/news",
    component: _de5cf14c
  }, {
    path: "/en/:language/newsroom/newsletter",
    component: _b05be200
  }, {
    path: "/en/:language/newsroom/newsletter",
    component: _b05be200
  }, {
    path: "/en/:language/newsroom/noticias",
    component: _de5cf14c
  }, {
    path: "/en/:language/newsroom/newsletterNew/:newsletterId",
    component: _c59fb61e
  }, {
    path: "/en/:language/newsroom/noticia-newsletter/:newsletterId",
    component: _c59fb61e
  }, {
    path: "/en/:language/nuestra-gente-in/perfil/:lawyerId/:_title",
    component: _206f0ed5
  }, {
    path: "/en/:language/our-people/profile/:lawyerId/:_title",
    component: _206f0ed5
  }, {
    path: "/en/:language/buscador/:textToSearch",
    component: _717d151f
  }, {
    path: "/en/:language/nuestra-gente-in/:countryId",
    component: _022e5452
  }, {
    path: "/en/:language/our-people/:countryId",
    component: _022e5452
  }, {
    path: "/en/:language/searcher/:textToSearch",
    component: _717d151f
  }, {
    path: "/en/:language/detalle-area-practica/:practiceAreaId/:practiceAreaName",
    component: _18bfedc3
  }, {
    path: "/en/:language/practice-area-detail/:practiceAreaId/:practiceAreaName",
    component: _18bfedc3
  }, {
    path: "/en/:language/detalle-noticia/:articleId/:newsType/:articleName",
    component: _5186f23f
  }, {
    path: "/en/:language/new-detail/:articleId/:newsType/:articleName",
    component: _5186f23f
  }, {
    path: "/detailService/:id?/:title?",
    component: _8b5aeb5a,
    name: "detailService-id-title___es"
  }, {
    path: "/detailNew/:articleId?/:newsType?/:title?",
    component: _d5fd5330,
    name: "detailNew-articleId-newsType-title___es"
  }, {
    path: "/:language/about-us",
    component: _248d4b08
  }, {
    path: "/:language/areas-practica",
    component: _756fce88
  }, {
    path: "/:language/awards",
    component: _6877a523
  }, {
    path: "/:language/contact-us",
    component: _3937b295
  }, {
    path: "/:language/contacto",
    component: _3937b295
  }, {
    path: "/:language/diversidad",
    component: _061e271f
  }, {
    path: "/:language/diversity",
    component: _061e271f
  }, {
    path: "/:language/home",
    component: _2563ddd0
  }, {
    path: "/:language/inicio",
    component: _2563ddd0
  }, {
    path: "/:language/memberships",
    component: _70af6d80
  }, {
    path: "/:language/membresias",
    component: _70af6d80
  }, {
    path: "/:language/practice-areas",
    component: _756fce88
  }, {
    path: "/:language/premios",
    component: _6877a523
  }, {
    path: "/:language/recognitions",
    component: _30b79a06
  }, {
    path: "/:language/reconocimientos",
    component: _30b79a06
  }, {
    path: "/:language/sobre-nosotros",
    component: _248d4b08
  }, {
    path: "/:language/sostenibilidad",
    component: _62c571d1
  }, {
    path: "/:language/sustainability",
    component: _62c571d1
  }, {
    path: "/:language/newsroom/knowledgecenter",
    component: _55d7989c
  }, {
    path: "/:language/newsroom/knowledgecenter",
    component: _55d7989c
  }, {
    path: "/:language/newsroom/main",
    component: _3d2d1f40
  }, {
    path: "/:language/newsroom/main",
    component: _3d2d1f40
  }, {
    path: "/:language/newsroom/news",
    component: _de5cf14c
  }, {
    path: "/:language/newsroom/newsletter",
    component: _b05be200
  }, {
    path: "/:language/newsroom/newsletter",
    component: _b05be200
  }, {
    path: "/:language/newsroom/noticias",
    component: _de5cf14c
  }, {
    path: "/:language/newsroom/newsletterNew/:newsletterId",
    component: _c59fb61e
  }, {
    path: "/:language/newsroom/noticia-newsletter/:newsletterId",
    component: _c59fb61e
  }, {
    path: "/:language/nuestra-gente-in/perfil/:lawyerId/:_title",
    component: _206f0ed5
  }, {
    path: "/:language/our-people/profile/:lawyerId/:_title",
    component: _206f0ed5
  }, {
    path: "/:language/buscador/:textToSearch",
    component: _717d151f
  }, {
    path: "/:language/nuestra-gente-in/:countryId",
    component: _022e5452
  }, {
    path: "/:language/our-people/:countryId",
    component: _022e5452
  }, {
    path: "/:language/searcher/:textToSearch",
    component: _717d151f
  }, {
    path: "/:language/detalle-area-practica/:practiceAreaId/:practiceAreaName",
    component: _18bfedc3
  }, {
    path: "/:language/practice-area-detail/:practiceAreaId/:practiceAreaName",
    component: _18bfedc3
  }, {
    path: "/:language/detalle-noticia/:articleId/:newsType/:articleName",
    component: _5186f23f
  }, {
    path: "/:language/new-detail/:articleId/:newsType/:articleName",
    component: _5186f23f
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

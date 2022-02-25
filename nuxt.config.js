import axios from './config/axios.js'
import build from './config/build.js'
import buildModules from './config/buildmodules.js'
import cli from './config/cli.js'
import css from './config/css.js'
import components from './config/components.js'
import content from './config/content.js'
import head from './config/head.js'
import hooks from './config/hooks.js'
import loading from './config/loading.js'
import modules from './config/modules.js'
import plugins from './config/plugins.js'
import render from './config/render.js'
import server from './config/server.js'
import ssr from './config/ssr.js'
import target from './config/target.js'

export default {
  ...axios,
  ...build,
  ...buildModules,
  ...components,
  ...content,
  ...css,
  ...cli,
  ...head,
  ...hooks,
  ...loading,
  ...modules,
  ...plugins,
  ...render,
  ...server,
  ...ssr,
  ...target,
}

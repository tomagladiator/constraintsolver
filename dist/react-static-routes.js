
    import React, { Component } from 'react'
    import { Switch, Route } from 'react-router-dom'

    import src_containers_Home from '../src/containers/Home'
import src_containers_Contact from '../src/containers/Contact'
import src_containers_Expertise from '../src/containers/Expertise'
import src_containers_ReachMe from '../src/containers/ReachMe'
import src_containers_Thanks from '../src/containers/Thanks'
import src_containers_Realisations from '../src/containers/Realisations'
import src_containers_Post from '../src/containers/Post'
import src_containers_Blog from '../src/containers/Blog'
import src_containers____ from '../src/containers/404'

    export default class Routes extends Component {
      render () {
        return (
          <Switch>
              <Route exact path={'/'} component={src_containers_Home} />,
<Route exact path={'/contact'} component={src_containers_Contact} />,
<Route exact path={'/expertise'} component={src_containers_Expertise} />,
<Route exact path={'/reachme'} component={src_containers_ReachMe} />,
<Route exact path={'/merci'} component={src_containers_Thanks} />,
<Route exact path={'/realisations'} component={src_containers_Realisations} />,
<Route exact path={'/blog/post/comment-estimer-le-cout-de-laccessibilite-dans-un-projet'} component={src_containers_Post} />,
<Route exact path={'/blog/post/head-comprendre-les-balises-et-les-elements-dans-la-balise-head'} component={src_containers_Post} />,
<Route exact path={'/blog/post/avoir-une-font-parfaitement-fluide-entre-deux-breakpoints-fixes'} component={src_containers_Post} />,
<Route exact path={'/blog/post/simplifier-au-minimum-le-reset-de-votre-css-avec-foundation'} component={src_containers_Post} />,
<Route exact path={'/blog'} component={src_containers_Blog} />
              <Route component={src_containers____} />
          </Switch>
        )
      }
    }
  
import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import Stitching from '../pages/Stitching'
import Task from '../pages/Task'


const Routes: React.FC = () => (
  <>
    <Switch>
      <Route exact path="/" component={Task} />
      <Route exact path="/token" component={Stitching} />
      <Route component={() => <div>Not Found</div>} />
    </Switch>
  </>
)

export default Routes

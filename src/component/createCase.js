import React from 'react';
import MiniDrawer from '../caseMiniDrawer';
import Typography from '@material-ui/core/Typography';
class createCase extends React.Component {

  render() {
    return (
      <div className="Dashboard">
      <MiniDrawer/>
          <main className={"content"}>
          <div className={"toolbar"} />
          <Typography noWrap>
            <div class="inboxContent">

            </div>
          </Typography>
          <caseForm/>
        </main>  
      </div>   
    );
  }
}
  
export default createCase;
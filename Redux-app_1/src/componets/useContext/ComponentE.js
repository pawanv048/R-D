import React, { useContext } from 'react';
import ComponentF from './ComponentF';

// improvment of consumption of consume in use constext
import { UserContext, ChannelContext } from '../../App';

const ComponentE = () => {

  const user = useContext(UserContext)
  const channel = useContext(ChannelContext)

  return (
    <div>
      {user} - {channel}
    </div>
  )
}

export default ComponentE


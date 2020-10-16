import React, { useEffect } from 'react';
import BusinessRanking from '../../components/business-ranking';
import Loading from '../../components/loading';
import { useDispatch, useSelector } from 'react-redux';
import { getBusiness } from '../../redux/action/ranking';

const Ranking = () => {
    const dispatch = useDispatch();
    const { users } = useSelector(state => state.ranking)

    useEffect(() => {
        !users.length && dispatch(getBusiness())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [users])

    return (
        <>{!users.length ?
            <Loading /> :
            <BusinessRanking users={users} />}
        </>
    )
}

export default Ranking;

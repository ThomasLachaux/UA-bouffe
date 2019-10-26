import { useDispatch, useSelector } from 'react-redux';

import React from 'react';
import { State } from '../reducers';

import './priceToogler.scss';
import { toogleOrgaPrice } from '../reducers/orgaPrice';

const PriceToogler = () => {
  const orgaPrice = useSelector((state: State) => state.orgaPrice);
  const dispatch = useDispatch();

  return (
    <div className={`price-toogler ${orgaPrice ? 'active' : ''}`} onClick={() => dispatch(toogleOrgaPrice())}>
      {orgaPrice ? 'Prix orga' : 'Prix normal'}
    </div>
  );
};

export default PriceToogler;

import React, { useState } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import Carousel from 'react-elastic-carousel';
import Cards from '../../components/Team-Cards/Cards';
import './TeamCategory.scss';
import TabPanel from '../Tab-Panel/TabPanel';
import useStyles from './styles';
import Data from '../../SiteData/TeamData';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3, itemsToScroll: 3 },
  { width: 1200, itemsToShow: 3, itemsToScroll: 3 },
];

const tabData = [
  {
    category: 'convener',
    index: 0,
  },
  {
    category: 'heads',
    index: 1,
  },
  {
    category: 'core-team',
    index: 2,
  },
  {
    category: 'developers',
    index: 3,
  },
];

function TeamCategory() {
  const [value, setValue] = useState(0);
  const [menuItem, setMenuItem] = useState(Data);
  const classes = useStyles();

  const handleTabs = (e, val) => {
    setValue(val);
  };
  return (
    <div className="team-category__container">
      <div className="team-category">
        <Tabs
          value={value}
          onChange={handleTabs}
          className="tabs-wrapper"
          textColor="inherit"
          fullWidth
          centered
          classes={{
            indicator: classes.indicator,
          }}
        >
          <Tab label={<span className={classes.tabLabel}>Convener</span>} />
          <Tab label={<span className={classes.tabLabel}>Heads</span>} />
          <Tab label={<span className={classes.tabLabel}>Core-Team</span>} />
          <Tab label={<span className={classes.tabLabel}>Developers</span>} />
        </Tabs>

        <div className="cards-wrapper">
          {tabData.map((data) => (
            <TabPanel
              value={value}
              index={data.index}
              className={data.category}
            >
              <div>
                <Carousel breakPoints={breakPoints}>
                  {menuItem
                    .filter((item) => item.team === `${data.category}`)
                    .map((item, index) => (
                      <Cards
                        key={index}
                        name={item.name}
                        role={item.roles}
                        image={item.url}
                        email={item.email}
                        linkedin={item.linkedin}
                        insta={item.insta}
                      />
                    ))}
                </Carousel>
              </div>
            </TabPanel>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamCategory;

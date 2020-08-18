import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

const data = [
  { id: 1, quote: 'Hello there - me' },
  { id: 2, quote: 'Lore ipsum loris frigates monosus - me' },
  { id: 3, quote: 'Hello there - me' },
  { id: 4, quote: 'Lore ipsum loris frigates monosus - me' },
  { id: 5, quote: 'Lore ipsum loris frigates monosus - me' },
  { id: 6, quote: 'Hello there - me' },
  { id: 7, quote: 'Lore ipsum loris frigates monosus - me' }
]

const App = () => {
  const classes = useStyles();

  return (
    <div className="App">
      <div className={classes.root}>
        {data.map(item =>
          <Paper elevation={3} key={item.id}>
            <h5>{item.quote}</h5>
          </Paper>
        )}
      </div>
    </div>
  );
}

export default App;

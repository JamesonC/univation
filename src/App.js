import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, TextField, Button } from '@material-ui/core/';
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

const initialData = [
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
  const [data, setData] = useState(initialData)
  const [value, setValue] = useState('');

  const handleChange = event => {
    setValue(event.target.value);
  };

  const submitQuote = value => {
    setData([...data, {id: data.length + 1, quote: value}])
    setValue('')
  }

  return (
    <div className="App">
      <div>
        <TextField
          id="standard-multiline-flexible"
          label="Insert Quote..."
          rowsMax={4}
          value={value}
          onChange={handleChange}
        />
        <Button variant="contained" color="primary" onClick={() => submitQuote(value)}>Add Quote</Button>
      </div>
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

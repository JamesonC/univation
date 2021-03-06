import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, TextField, Button } from '@material-ui/core/';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

const initialData = [
  { id: 1, quote: 'Hello there' },
  { id: 2, quote: 'Lore ipsum loris frigates monosus' },
  { id: 3, quote: 'Hello there' },
  { id: 4, quote: 'Lore ipsum loris frigates monosus' },
  { id: 5, quote: 'Lore ipsum loris frigates monosus' },
  { id: 6, quote: 'Hello there' },
  { id: 7, quote: 'Lore ipsum loris frigates monosus' }
]

const App = () => {
  const classes = useStyles();
  const [data, setData] = useState(initialData)
  const [value, setValue] = useState('');

  const handleChange = event => {
    setValue(event.target.value);
  };

  const submitQuote = value => {
    setData([...data, { id: data.length + 1, quote: value }])
    setValue('')
  }

  const deleteQuote = id => {
    setData(data.filter(item => item.id !== id))
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
        <div style={{ marginTop: 5 }}>
          <Button size='large' variant="contained" color="primary" onClick={() => submitQuote(value)}>Add Quote</Button>
          <Button size='large' variant="contained" style={{backgroundColor: 'black', color: 'white', marginLeft: 5}} href="https://github.com/JamesonC/univation" target="_blank">See Repo</Button>
        </div>
      </div>
      <div className={classes.root}>
        {data.map(item =>
          <Paper elevation={3} key={item.id}>
            <DeleteForeverIcon onClick={() => deleteQuote(item.id)}/>
            <h5>"{item.quote}" - me</h5>
          </Paper>
        )}
      </div>
    </div>
  );
}

export default App;

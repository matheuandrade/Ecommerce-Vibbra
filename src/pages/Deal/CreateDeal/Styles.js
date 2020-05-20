import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      formControlSelect: {
        marginTop: '16px',
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
      button: {
        // margin: theme.spacing(1),
        width: 'inherit'
      }  
}));


export default useStyles;
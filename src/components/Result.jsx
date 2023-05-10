import { useContext } from 'react';
 
import { Box, styled } from '@mui/material';

import { DataContext } from './context/DataProvider';

const Result = () => {
   // const {src,setSrc} = useState('');

    const { html,css,js,} = useContext(DataContext);

    const srcCode = `
        <html>
         <body>${html}</body>
         <style>${css}</style>
         <script>${js}</script>
       </html>
    `
   /* useEffect(() => {
      const timeout = setTimeout( () =>{
        setSrc(srcCode);
      });

      return () => clearTimeout(timeout);
   }, [html,css,js])*/


    return(
        <Box>
            <iframe
               srcDoc={srcCode}
               title="Output"
               sandbox='allow-scripts'
               frameBorder={0}
               width="100%"
               height="100%"

            />

        </Box>
    )
}
export default Result;
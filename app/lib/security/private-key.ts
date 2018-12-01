import fs from 'fs';
import path from 'path';

/* SERVER-START */
export const privateKey = fs.readFileSync && fs.readFileSync(path.join(__dirname, '/private.key'), 'utf8')
/* SERVER-END */



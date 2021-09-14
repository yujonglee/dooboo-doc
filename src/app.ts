import fs from 'fs';

import getConfig from './getConfig';
import docGen from './docGen';

fs.writeFileSync(
  getConfig().output,
  docGen({ plugIn: 'toMDX' }).join('\n\n'),
);

import tape from 'tape';
import path from '../index.esm.js';

var pwd = process.cwd();
path.setCWD(pwd);


tape('path.relative zero-length', function (t) {
  // relative, internally calls resolve. So, '' is actually the current directory
  //t.strictEqual(path.relative('', pwd), '');
  //t.strictEqual(path.relative(pwd, ''), '');
  

  t.strictEqual(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'), '../../impl/bbb');
  t.strictEqual(path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb'), '..\\..\\impl\\bbb');
  t.strictEqual(path.relative('C:\\orandea\\test\\aaa'.replaceAll('\\','/'), 'C:\\orandea\\impl\\bbb'.replaceAll('\\','/')), '..\\..\\impl\\bbb'.replaceAll('\\','/'));
  t.end();
});
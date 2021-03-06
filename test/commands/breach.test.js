import commander from 'commander';
import expect from 'expect.js';
import breach from '../../src/commands/breach';

describe('command: breach', () => {
  it('should add "breach" command to Commander instance', (done) => {
    const program = new commander.Command('');
    expect(program.commands.length).to.be(0);
    breach(program);
    expect(program.commands[0]._name).to.be('breach');
    done();
  });
});

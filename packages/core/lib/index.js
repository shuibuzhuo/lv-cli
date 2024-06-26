'use strict';
import createCommitCommand from '@lv-cli/commit'
import createCLI from './createCLI.js'

export default function () {
  const program = createCLI()
  // 注册提交命令
  createCommitCommand(program)
  program.parse(process.argv)
}


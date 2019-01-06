#!/usr/bin/env node

const clone = require('git-clone-promise')
const program = require('commander')
const shell = require('shelljs');
const path = require('path')
const log = require('tracer').colorConsole()

program
  .command('create [projectName]') // 命名命令，可选参数projectName,传入action函数第一个参数
  .alias('c') // 命令简写
  .description('构建xhfpc模板项目')
  .option('-p, --platform [platform]', '选择开发平台 web/mobile/ie8', /^(web|mobile|ie8)$/i, 'mobile') // 可选参数，key值为platform，只能传入指定值，默认'mobile'
  .option('-f, --framework [framework]', '选择开发框架 vue/react/jQuery/angular', /^(vue|react|jQuery|angular)$/i, 'vue') // 可选参数，key值为framework，只能传入指定值，默认'vue'
  .action(function (projectName = 'xuhengfeng_pc', options) { // 执行命令的的函数
    if (projectName) {
      let pwd = shell.pwd()
      let localpath = path.join(pwd.toString(), projectName)
      const {
        platform
      } = options
      log.info(`正在拉取模板代码，下载位置：\\${projectName} ...`)
      clone(`https://github.com/Xuhengfeng/${projectName}.git`, localpath).then(res => {
        shell.rm('-rf', path.join(localpath, '.git'))
        log.info('happy 模板工程建立完成!!!')
      })
    } else {
      log.error('正确命令例子：xhfcli create testweb -p web')
      log.info('请输入模板的名字!')
    }
  })
  .on('--help', () => {
    log.info('qq: 564297479@qq.com')
    log.info('author: 徐横峰')
  })
program.parse(process.argv)
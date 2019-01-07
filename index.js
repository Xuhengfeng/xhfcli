#!/usr/bin/env node

const clone = require('git-clone-promise')
const program = require('commander')
const shell = require('shelljs')
const path = require('path')
const log = require('tracer').colorConsole({
  format: ">> {{message}}"
});

program
  .version('1.6.7', '-v, --version')
  .description('徐横峰自定义应用模板工程的cli')
  .on('--help', function () {
    log.info('tel: 15857009524')
    log.info('author: 徐横峰 <564297479@qq.com>')
  })
  .option('-p, --platform', '选择开发平台 web/mobile/ie8', /^(web|mobile|ie8)$/i, 'mobile')
  .option('-f, --framework', '选择开发框架 vue/react/jQuery/angular', /^(vue|react|jQuery|angular)$/i, 'vue')
program
  .command('* <tpl> <project>')
  .action(function (tpl, project) {
    log.info('目前xhfcli支持以下模板：')
    log.info('使用例子：xhfcli nuxtBlog myproject')
    if (tpl && project) {
      let pwd = shell.pwd()
      let localpath = path.join(pwd.toString(), project)
      log.info(`正在拉取模板代码,下载位置: ${pwd}\\${project} ...`)
      clone(`https://github.com/Xuhengfeng/${tpl}.git`, localpath).then(res => {
        shell.rm('-rf', path.join(localpath, '.git'))
        log.info('徐横峰欢迎你!')
        log.info('模板工程建立完成!!!')
      })
    } else {
      log.error('正确命令例子：xhfcli nuxtBlog myproject')
    }
  })
program.parse(process.argv)
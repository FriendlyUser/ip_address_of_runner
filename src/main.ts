import * as core from '@actions/core'
import {getIpAddress, getIpInfo} from './ip'
import {wait} from './wait'

async function run(): Promise<void> {
  try {
    const ms: string = core.getInput('milliseconds')
    core.debug(`Waiting ${ms} milliseconds ...`) // debug is only output if you set the secret `ACTIONS_STEP_DEBUG` to true

    core.debug(new Date().toTimeString())
    await wait(parseInt(ms, 10))
    core.debug(new Date().toTimeString())
    // getIpAddress
    // get ip
    const ipAddressOfRunner = await getIpAddress()
    core.debug(`ipAddressOfRunner: ${ipAddressOfRunner}`)

    // get ip info
    const ipInfo = await getIpInfo(ipAddressOfRunner)
    // output ip info
    core.notice(`ipInfo: ${JSON.stringify(ipInfo)}`)
    core.setOutput('ip_raw', ipInfo)
    // for each property in ipInfo, set output
    for (const [key, value] of Object.entries(ipInfo)) {
      core.setOutput(key, value)
    }
    core.notice(`ip: ${ipInfo.ip}`)
    core.notice(`country: ${ipInfo.countryname}`)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()

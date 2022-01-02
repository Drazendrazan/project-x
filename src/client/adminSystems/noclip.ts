import { localPlayer } from '@/constants'
import hud from '@/hud'
class Noclip {
  private _enable: boolean = false
  private _noclipCamera: CameraMp = mp.cameras.new('gameplay')

  constructor() {
    mp.events.add('render', () => this.flyingNoclip())
    mp.keys.bind(VirtualKeys.F5, true, () => this.toggleNoclip())
  }
  public set state(toggle: boolean) {
    this._enable = toggle
  }
  public get state(): boolean {
    return this._enable
  }
  /**
   * flyingNoclip
   *
   * Функция для управления персонажем в режиме "Свободный полёт"
   */
  public flyingNoclip(): void {
    const { cursor } = hud
    if (!this.state || cursor) return
    const crot = this._noclipCamera.getRot(2)
    const heading = mp.game.invoke(RageEnums.Natives.CAM.GET_FOLLOW_PED_CAM_VIEW_MODE) != 4 ? crot.z + 180 : crot.z
    localPlayer.setHeading(heading)
    let {
      position: { x, y, z },
    } = localPlayer
    let realspeed: number = 1

    if (mp.keys.isDown(VirtualKeys.LSHIFT)) realspeed *= 2

    if (mp.keys.isDown(VirtualKeys.ALT)) realspeed *= 0.2

    if (mp.keys.isDown(VirtualKeys.W)) {
      x += realspeed * -Math.sin((crot.z * Math.PI) / 180)
      y += realspeed * Math.cos((crot.z * Math.PI) / 180)
      z += realspeed * Math.sin((crot.x * Math.PI) / 180)
    }
    if (mp.keys.isDown(VirtualKeys.A)) {
      crot.z -= 90
      x += realspeed * Math.sin((crot.z * Math.PI) / 180)
      y += realspeed * -Math.cos((crot.z * Math.PI) / 180)
    }
    if (mp.keys.isDown(VirtualKeys.S)) {
      x += realspeed * Math.sin((crot.z * Math.PI) / 180)
      y += realspeed * -Math.cos((crot.z * Math.PI) / 180)
      z += realspeed * -Math.sin((crot.x * Math.PI) / 180)
    }
    if (mp.keys.isDown(VirtualKeys.D)) {
      crot.z += 90
      x += realspeed * Math.sin((crot.z * Math.PI) / 180)
      y += realspeed * -Math.cos((crot.z * Math.PI) / 180)
    }
    if (mp.keys.isDown(VirtualKeys.SPACE)) z += 0.5 * realspeed

    if (mp.keys.isDown(VirtualKeys.LCTRL)) z -= 0.5 * realspeed

    localPlayer.position = new mp.Vector3(x, y, z)
  }
  /**
   * toggleNoclip
   *
   * Функция для переключения режима "Свободный полёт"
   */
  public toggleNoclip(): void {
    if (!this.state) {
      localPlayer.freezePosition(true)
      this.state = true
    } else {
      localPlayer.freezePosition(false)
      this.state = false
      const { position } = localPlayer
      const { x, y } = position
      const z = mp.game.gameplay.getGroundZFor3DCoord(x, y, position.z, false, false) + 1
      localPlayer.position = new mp.Vector3(x, y, z)
    }
  }
}

const noclip = new Noclip()

export default noclip

class Hud {
  public get cursor(): boolean {
    return mp.gui.cursor.visible
  }

  public set cursor(toggle: boolean) {
    mp.gui.cursor.show(toggle, toggle)
  }
  /**
   * toggleCursor
   * Переключает состояние курсора игрока
   */
  public toggleCursor(): void {
    this.cursor = !this.cursor
  }
}

export default new Hud()

import BitUtils from "../Utils/BitUtils";

abstract class RegisterBase {
  protected m_Value: number;
  public get value(): number {
    return this.m_Value;
  }

  /**
   * 更新数据
   * @param newValue
   */
  public updateValue(newValue: number): void {
    this.m_Value = newValue;
  }

  /**
   * 更新位数据
   * @param pos 位置
   * @param _1or0 1或者0
   */
  public updateBit(pos: number, _1or0: number) {
    let currentValue = this.m_Value;
    if (_1or0) {
      currentValue = BitUtils.set(currentValue, pos);
    } else {
      currentValue = BitUtils.clear(currentValue, pos);
    }

    this.updateValue(currentValue);
  }
}

export default RegisterBase;

package com.keyless.rexroth.dto;


public class RCUEreignisDTO {

    private String rcuId;
    private String deviceName;
    private String result;

    public String getRcuId() {
        return rcuId;
    }
    public void setRcuId(String rcuId) {
        this.rcuId = rcuId;
    }

    public String getDeviceName() {
        return deviceName;
    }
    public void setDeviceName(String deviceName) { this.deviceName = deviceName; }

    public String getResult() { return result; }
    public void setResult(String result) { this.result = result; }

}

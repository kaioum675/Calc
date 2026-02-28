function calcu() {

  // ===== Hydraulique 2 =====
  let hydtd = parseFloat(document.getElementById("hydtd").value) || 0;
  let hydctrl = parseFloat(document.getElementById("hydctrl").value) || 0;
  let hyd = hydtd * 0.4 + hydctrl * 0.6;
  document.getElementById("hydtt").value = hyd.toFixed(2);

  // ===== Béton Armé 2 =====
  let batd = parseFloat(document.getElementById("batd").value) || 0;
  let bactrl = parseFloat(document.getElementById("bactrl").value) || 0;
  let ba = batd * 0.4 + bactrl * 0.6;
  document.getElementById("batt").value = ba.toFixed(2);

  // ===== RDM3 =====
  let rdmtd = parseFloat(document.getElementById("rdmtd").value) || 0;
  let rdmctrl = parseFloat(document.getElementById("rdmctrl").value) || 0;
  let rdm = rdmtd * 0.4 + rdmctrl * 0.6;
  document.getElementById("rdmtt").value = rdm.toFixed(2);

  // ===== MDSol 2  =====
  let mdstd = parseFloat(document.getElementById("mdstd").value) || 0;
  let mdsctrl = parseFloat(document.getElementById("mdsctrl").value) || 0;
  let mdstp = parseFloat(document.getElementById("mdstp").value) || 0;
  let mds = mdstd * 0.2 + mdsctrl * 0.6 + mdstp * 0.2;
  document.getElementById("mdstt").value = mds.toFixed(2);

  // ===== Topo 2 (CTRL 60% + TP 40%) =====
  let topoctrl = parseFloat(document.getElementById("topoctrl").value) || 0;
  let topotp = parseFloat(document.getElementById("topotp").value) || 0;
  let topo = topoctrl * 0.6 + topotp * 0.4;
  document.getElementById("topott").value = topo.toFixed(2);

  // ===== Transfer Thermique =====
  let tttd = parseFloat(document.getElementById("tttd").value) || 0;
  let ttctrl = parseFloat(document.getElementById("ttctrl").value) || 0;
  let tt = tttd * 0.4 + ttctrl * 0.6;
  document.getElementById("tttt").value = tt.toFixed(2);

  // ===== MDC 2 (TP 40% + CTRL 60%) =====
  let mdctp = parseFloat(document.getElementById("mdctp").value) || 0;
  let mdctrl = parseFloat(document.getElementById("mdctrl").value) || 0;
  let mdc = mdctp * 0.4 + mdctrl * 0.6;
  document.getElementById("mdctt").value = mdc.toFixed(2);

  // ===== المواد المباشرة =====
  let eme = parseFloat(document.getElementById("pgctt").value) || 0;
  let dao = parseFloat(document.getElementById("dessintt").value) || 0;
  let stage = parseFloat(document.getElementById("geott").value) || 0;

  // ===== المجموع العام =====
  let total =
    hyd*2 + ba*2 + rdm*2 + mds*3 + topo*2 + tt*2 + mdc*2 +
    eme*1 + dao*2 + stage*1;

  let general = total / 19; // عدد المواد

  document.getElementById("toto").innerText = general.toFixed(2);
}

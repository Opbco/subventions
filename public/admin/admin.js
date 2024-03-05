$(document).ready(function () {
  
  $(".eligible").hide();
  $("[name='btn_update_and_edit']").hide();
  $("[name='btn_update_and_list']").hide();

  $("select[id$='statut']").change(()=>{
    if($("select[id$='statut']").val() != "1"){
      $("[name='btn_update_and_list']").show();
    }else{
      $("[name='btn_update_and_list']").hide();
    }
  });

  if ($('.eligibilite input[type="checkbox"]').not(":checked").length == 0) {
    $(".eligible").show();
    $("[name='btn_update_and_edit']").show();
  }

  $(".eligibilite").on("change", 'input[type="checkbox"]', function () {
    if ($('.eligibilite input[type="checkbox"]').not(":checked").length == 0) {
      $(".eligible").show();
      $("[name='btn_update_and_edit']").show();
    } else {
      $(".eligible").hide();
      $("[name='btn_update_and_edit']").hide();
    }
  });

  $("input[id$='nombrePersonnelPermanent']").change(() => {
    let perperm = $("input[id$='nombrePersonnelPermanent']").val();
    let perens = $("input[id$='nombrePersonnelEnseignant']").val() || 1;
    $("input[id$='permaVacataire']").val(Math.round((perperm / perens) * 100));
  });
  $("input[id$='nombrePersonnelEnseignant']").change(() => {
    let perperm = $("input[id$='nombrePersonnelPermanent']").val();
    let perens = $("input[id$='nombrePersonnelEnseignant']").val() || 1;
    $("input[id$='permaVacataire']").val(Math.round((perperm / perens) * 100));
  });
});

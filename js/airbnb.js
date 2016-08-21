$(document).ready(function(){
  $('#carousel-example-generic').carousel();
  $('#carousel-example-generic2').carousel({
    interval: false
  });
  $.fn.datepicker.dates['fr'] = {
    days: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
    daysShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
    daysMin: ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"],
    months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Jullet", "Août", "Septembre", "Octobre", "Novembre", "Decembre"],
    monthsShort: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Jul", "Aou", "Sep", "Oct", "Nov", "Dec"],
    today: "Today",
    clear: "Clear",
    format: "dd/mm/yyyy",
    titleFormat: "MM yyyy", /* Leverages same syntax as 'format' */
    weekStart: 1,
  };
  $('.start_datetimepicker').datepicker({
    language: 'fr',
    autoclose:false,
    startDate: "+0d",
    endDate:"31/mm/yyyy",
  });
  $('.end_datetimepicker').datepicker({
    language: 'fr',
    autoclose:false,
    startDate: "+0d",
  });
  $('#start_datetimepicker').datepicker().click(function (){
    $('#end_datetimepicker').datepicker('show');
  });
  $('#end_datetimepicker').datepicker().click(function (){
    $('#start_datetimepicker').datepicker('show');
  });
});

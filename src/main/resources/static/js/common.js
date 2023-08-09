$(document).ready(function () {
  // 전체 선택 체크박스를 클릭했을 때
  $("#subjectChk05").click(function () {
    // 하위 체크박스들의 상태를 전체 선택 체크박스와 동기화
    $('input[name="ACTIVITY_TYPE"]').prop("checked", this.checked);
  });

  // 진로교육성취기준 전체 선택 체크박스를 클릭했을 때
  $("#subjectChk06").click(function () {
    // 하위 체크박스들의 상태를 진로교육성취기준 전체 선택 체크박스와 동기화
    $('input[name="EDU_ACHIEVEMENT_TYPE"]').prop("checked", this.checked);
  });

  // 연도 전체 선택 체크박스를 클릭했을 때
  $("#subjectChk03_1").click(function () {
    // 다른 연도 라디오 버튼들의 선택 상태를 연도 전체 선택 체크박스와 동기화
    $('input[name="PRODUCTION_YEAR"]').prop("checked", this.checked);
  });

  // 하위 체크박스들 중 하나라도 체크가 해제되었을 때
  $(
    'input[name="ACTIVITY_TYPE"], input[name="EDU_ACHIEVEMENT_TYPE"], input[name="PRODUCTION_YEAR"]'
  ).click(function () {
    // 전체 선택 체크박스의 상태를 false로 설정
    $("#subjectChk05, #subjectChk06, #subjectChk03_1").prop("checked", false);
  });
});

/*var COM_MSG_00003 = "은(는) 최대";
var COM_MSG_00004 = "Bytes까지 쓸수 있습니다.";
var COM_MSG_00004 = "현재";
var COM_MSG_00004 = "Bytes를 사용하였습니다.";*/

/* 숫자만 입력 가능하게 함
 * onkeypress 이벤트에 적용 : ime-mode를 반드시 disabled로 설정해야 함.
 * 예) style="ime-mode:disabled" onkeypress="onlyNumber()"
 */
function onlyNumber() {
  if (window.event.keyCode >= 48 && window.event.keyCode <= 57) {
  } else {
    window.event.keyCode = "";
  }
}

/* 필수 항목 입력 여부 체크
 * 예) if(requiredField(frm.are_code, "지역코드")) return;
 */
function requiredField(obj, msg) {
  if (obj.value.replace(/[ ]/g, "") == "") {
    alert(msg);
    if (obj.select != null) obj.select();
    obj.focus();
    return true;
  }
  return false;
}

/* 입력 텍스트의 바이트 수 체크
 * 예) if(!check_msglen(frm.htl_comid, 15, "공급업체 상품코드")) return;
 */
function check_msglen(obj, maxlen, msg) {
  var length = calculate_msglen(obj.value);
  if (length > maxlen) {
    //alert("[" + objName + "]" + COM_MSG_00003 + " " + maxlen + " " + COM_MSG_00003 + "\n" + COM_MSG_00004 + " " + length + " " + COM_MSG_00005);
    alert(msg + " [Now : " + length + "]");
    obj.select();
    obj.focus();
    return false;
  }
  return true;
}

/* 입력 텍스트의 바이트 수 계산하기
 * 예) var len = calculate_msglen(obj.value);
 */
function calculate_msglen(message) {
  var nbytes = 0;

  for (i = 0; i < message.length; i++) {
    var ch = message.charAt(i);
    if (escape(ch).length > 4) {
      nbytes += 2;
    } else if (ch == "\n") {
      if (message.charAt(i - 1) != "\r") {
        nbytes += 1;
      }
    } else if (ch == "<" || ch == ">") {
      nbytes += 4;
    } else {
      nbytes += 1;
    }
  }

  return nbytes;
}

/*
 * Iframe 리사이징
 */
function calcHeight(name) {
  //find the height of the internal page
  var the_height =
    parent.document.getElementById(name).contentWindow.document.body
      .scrollHeight;

  //change the height of the iframe
  parent.document.getElementById(name).height = the_height;
}

/*
 * Iframe 리사이징 (임의 사이즈)
 */
function calcHeight_h(vHeight, vWidth) {
  //find the height of the internal page
  var the_height = vHeight;
  var the_width = vWidth;

  //change the height of the iframe
  parent.document.getElementById("ifrm1").height = the_height;
  parent.document.getElementById("ifrm1").width = the_width;
}

/*
 * 스크립트, 메타테그, 스타일테그 사용 막기
 */
function noScript(obj, msg) {
  var str = obj.value;
  if (str != "") {
    str = str.toLowerCase();

    /*if (str.indexOf("<script") > -1) {
            alert(msg + "은[는] 스크립트(Script) 사용을 하실 수 없습니다.");
            return false;
        }
        if (str.indexOf("<meta") > -1) {
            alert(msg + "은[는] 메타(Meta)테그 사용을 하실 수 없습니다.");
            return false;
        }
        if (str.indexOf("<style") > -1) {
            alert(msg + "은[는] 스타일(style)테그 사용을 하실 수 없습니다.");
            return false;
        }*/
    if (
      str.indexOf("<script") > -1 ||
      str.indexOf("<meta") > -1 ||
      str.indexOf("<style") > -1
    ) {
      alert(msg);
      return false;
    }
  }
  return true;
}

/*
 * 특수문자 배제체크
 */
function Check_nonChar(id_text, chr, msg) {
  var nonchar = "";

  if (chr != "") {
    nonchar = chr;
  } else {
    nonchar = '~`!@#$%^&*()-_=+|<>?,./;:"' + "'";
  }

  var nonkorean = nonchar;

  var i;
  for (i = 0; i < id_text.length; i++) {
    if (nonkorean.indexOf(id_text.substring(i, i + 1)) >= 0) {
      alert(msg + " [" + nonchar + "]");
      return true;
      break;
    }
  }
  return false;
}

/*
 * 체크박스 전체 체크하거나 해제하기
 * xboxName : 체크할 박스 name 값
 * oboxName : 컨트롤할 체크박스 name 값 ( 예 : 최상단의 한개 체크박스 )
 */
function allChkBoxTrueFalse(xboxName, oboxName) {
  if (typeof xboxName == "undefined") return false;
  if (typeof oboxName == "undefined") return false;

  var checkbox_list1 = document.getElementsByName(xboxName);
  var checkbox_list2 = document.getElementsByName(oboxName);

  if (checkbox_list1.length == 0) {
    alert("체크박스가 존재하지 않습니다.");
    return false;
  }
  if (checkbox_list2.length == 0) {
    alert("체크박스가 존재하지 않습니다.");
    return false;
  }

  if (checkbox_list2[0].checked) {
    for (var i = 0; i < checkbox_list1.length; i++) {
      checkbox_list1[i].checked = true;
    }
  } else {
    for (var i = 0; i < checkbox_list1.length; i++) {
      checkbox_list1[i].checked = false;
    }
  }
}

/*
 * cboxName : 체크박스 name 값
 * all : ( true : 전체선택, false : 사용자가 체크한것만 )
 * msg : ( 사용자가 아무것도 체크하지 않았을때 출력될 메세지)
 * one : ( true : 무조건 하나만 선택 되었는지 체크, false : 하나 이상 체크 )
 */
function playContOne(cboxName, all, msg, one) {
  if (typeof cboxName == "undefined") return false;
  if (typeof all == "undefined") all = false;

  var idxs = "";
  var checkbox_list = document.getElementsByName(cboxName);

  if (checkbox_list.length == 0) {
    alert("체크박스가 존재하지 않습니다.");
    return false;
  }

  var chkForI = 0;
  var chkForILength = 0;

  for (var i = 0; i < checkbox_list.length; i++) {
    if (all || checkbox_list[i].checked) {
      idxs += checkbox_list[i].value + ",";
      chkForI++;
      chkForILength++;
    }
  }

  if (idxs.length == 0) {
    alert(msg);
    return false;
  }

  if (chkForILength > 1 && one) {
    alert("하나만 선택해 주세요.");
    return false;
  }

  return idxs;
}
function playCont(cboxName, all, msg) {
  return playContOne(cboxName, all, msg, false);
}

/*
 * str : 자를 문자열
 * n : 3 일경우 str 의 왼쪽 3글자만 출력됨
 */
function splitLeft(str, n) {
  if (n <= 0) {
    return "";
  } else if (n > String(str).length) {
    return str;
  } else {
    return String(str).substring(0, n);
  }
}

/*
 * str : 자를 문자열
 * n : 3 일경우 str 의 오른쪽 3글자만 출력됨
 */
function splitRight(str, n) {
  if (n <= 0) {
    return "";
  } else if (n > String(str).length) {
    return str;
  } else {
    var iLen = String(str).length;
    return String(str).substring(iLen, iLen - n);
  }
}

function fn_excel() {
  if (rsGlobal == null || rsGlobal == "") {
    alert("출력할 데이터가 없습니다.");
    return;
  }

  var html = "";

  var colTitle = $("#gridList").jqGrid("getGridParam", "colNames");
  var cellNm = $("#gridList").jqGrid("getGridParam", "colModel");
  var captionNm = $("#gridList").jqGrid("getGridParam", "caption");

  //    alert(cellNm[10].hidden);

  html = html + "<h4>" + captionNm + "</h4>";
  html = html + "<table border='1'><tr>";

  for (idx = 0; idx < colTitle.length; idx++) {
    for (idx in cellNm) {
      hidden = cellNm[idx].hidden;
      xlsExp = cellNm[idx].xlsExp;

      if (!hidden && !xlsExp) {
        html = html + "<td>" + colTitle[idx] + "</td>";
      }
    }
  }

  html = html + "</tr><tr>"; //줄바꿈

  //	    alert(JSON.stringify(rsGlobal));
  $.each(rsGlobal.rs, function (i) {
    if (i < rowNum) {
      rs = rsGlobal.rs[i];
      for (idx in cellNm) {
        check = rs[cellNm[idx].name];
        hidden = cellNm[idx].hidden;
        xlsExp = cellNm[idx].xlsExp;

        if (check == null) {
          check = " ";
        }
        if (!hidden && !xlsExp) {
          html =
            html + "<td style='mso-number-format:\"\\@\"'>" + check + "</td>\n";
        }
      }

      html = html + "</tr><tr>";
    }
  });

  html = html + "</tr></table>";
  html = html.replace("</tr><tr></tr></table>", "</tr></table>"); //마지막 라인의 tr을 제거

  $("#excelData").val(html);
  $("#excelTitle").val(captionNm);

  $("#frm").attr("target", "_cm");
  $("#frm")
    .attr("action", "/" + contextPaths[1] + "/order/pdfDown.do")
    .submit();
}

function fn_selectVal(rtnVal, arrStr, gridNm, gridRowId) {
  var arrRtn = rtnVal.split("|");
  var arrData = arrStr.split("|&|");

  if (gridNm == "" || gridNm == null) {
    for (idx = 0; idx < arrRtn.length; idx++) {
      if ($("#" + arrRtn[idx]).val() != "-") {
        $("#" + arrRtn[idx]).val(arrData[idx]);
      }
    }
    if (arrRtn[0].indexOf("_FN_DUPLCHK") > 0) {
      fn_DuplChk();
    }
  } else {
    //그리드에 데이터 삽입
    for (idx = 0; idx < arrRtn.length; idx++) {
      if (arrRtn[idx] != "-") {
        $("#" + gridNm).setCell(gridRowId, arrRtn[idx], arrData[idx]);
      }
    }
  }
}

function press(event) {
  if (event.keyCode == 13) {
    fn_list();
    return false;
  }
}

function fn_clean() {
  //	$('#frm').get(0).reset();

  //    $("form").each(function() {
  //        this.reset();
  //      });
  $('#frm [id *= "search"]').val("");
}

//파일 네임을 가져온다.
getFileName = function (str) {
  var segment = str.split("\\");
  var len = segment.length;
  return segment[len - 1];
};

/**  파일 리스트 관련 스크립트 **/
function uploadForm(obj) {
  // 업로드 파일 지정
  var ele = document.getElementById("upload_form");
  //파일 INPUT
  //var uEle=ele.getElementsByTagName('INPUT');
  //var len=uEle.length;

  //새로운 파일 INPUT
  var fEle = document.createElement("INPUT");
  fEle.type = "file";
  fEle.name = "ATCH_FILE";
  fEle.style.cssText = "width:90%;";
  fEle.className = "input_txt";
  fEle.onchange = function () {
    uploadForm(this);
  };

  var sEle = document.getElementById("files_list");
  var len = sEle.length;

  // 중복 파일 체크 한다.
  for (var i = 0; i < len; i++) {
    if (sEle[i].text == getFileName(obj.value)) {
      ele.removeChild(obj); //제거한다.
      ele.appendChild(fEle); //다시 그려준다.
      alert("파일이 중복 되었습니다.");
      return;
    }
  }

  ele.appendChild(fEle); //다시 그려준다.
  obj.style.display = "none";

  // 파일 목록을 그려준다.
  setList(ele);
}

function setList(ele) {
  // 업로드 대기 중인 파일 리스트를 가져온다.

  // 파일리스트 초기화
  var sEle = document.getElementById("files_list");
  var slen = sEle.length;
  for (var i = 0; i < slen; i++) {
    sEle[i] = null;
  } // 한번에 다 없어지지 않으므로 두번실행
  for (var i = 0; i < slen; i++) {
    sEle[i] = null;
  }

  //alert(slen);

  // 업로드 폼과 업로드 파일들을 읽어온다.
  var uEle = ele.getElementsByTagName("INPUT");
  var len = uEle.length;
  //alert(len);

  var j = 0;
  //파일 목록을 그려준다.
  for (var i = 0; i < len; i++) {
    if (uEle[i].value == "") {
      j++;
      continue;
    }
    //alert(uEle[i].value);
    var text = getFileName(uEle[i].value);
    var value = uEle[i].value;
    sEle[i - j] = new Option(text, value);
  }
}

function deleteFile() {
  // 파일리스트에 있는 파일 항목을 제거한다.

  //파일 목록
  var ele = document.getElementById("files_list"); //파일 목록
  //파일 INPUT
  var uForm = document.getElementById("upload_form");
  var uEle = uForm.getElementsByTagName("INPUT"); //파일 INPUT
  //파일 INPUT 갯수
  var len = uEle.length;

  if (len == 1) {
    alert("삭제할 대상이 없습니다.");
    return;
  }

  if (ele.value == "") {
    alert("삭제할 대상을 선택하시기 바랍니다.");
    return;
  }

  for (var i = 0; i < len; i++) {
    if (!uEle[i]) continue;
    if (uEle[i].value == "") continue;
    if (uEle[i].value == ele.value) uForm.removeChild(uEle[i]);
  }
  setList(uForm);
}

/**
 * 트위터 공유
 * @param msg 메세지
 * @param url 링크
 */
function pstTwitter(msg, url, seq) {
  url = url.substring(0, url.indexOf("?")).concat("?SEQ=" + seq);
  var href =
    "http://twitter.com/home?status=" +
    encodeURIComponent(msg) +
    " " +
    encodeURIComponent(url);
  var a = window.open(href, "twitter", "");
  if (a) {
    a.focus();
  }
}

/**
 * 미투데이 공유
 * @param msg 메세지
 * @param url 링크
 * @param tag 메세지
 */
function pstMe2Day(msg, url, tag, seq) {
  url = url.substring(0, url.indexOf("?")).concat("?SEQ=" + seq);
  var href =
    "http://me2day.net/posts/new?new_post[body]=" +
    encodeURIComponent(msg) +
    " " +
    encodeURIComponent(url) +
    "&new_post[tags]=" +
    encodeURIComponent(tag);
  var a = window.open(href, "me2Day", "");
  if (a) {
    a.focus();
  }
}

/**
 * 페이스북 공유
 * @param msg 메세지
 * @param url 링크
 */
function shareFaceBook(url) {
  var href = "http://www.facebook.com/sharer.php?u=" + url; //+ "&t=" + encodeURIComponent(msg);
  var a = window.open(href, "facebook", "");
  if (a) {
    a.focus();
  }
}

/**
 * 트위터 공유
 * @param msg 메세지
 * @param url 링크
 */
function shareTwitter(msg, url) {
  //url = url.substring(0, url.indexOf('?')).concat(paramString);
  var href =
    "http://twitter.com/home?status=" + encodeURIComponent(msg) + " " + url;
  var a = window.open(href, "twitter", "");
  if (a) {
    a.focus();
  }
}

/**
 * 미투데이 공유
 * @param msg 메세지
 * @param url 링크
 * @param tag 메세지
 */
function shareMe2Day(msg, url, tag) {
  //url = url.substring(0, url.indexOf('?')).concat(paramString);
  var href =
    "http://me2day.net/posts/new?new_post[body]=" +
    encodeURIComponent(msg) +
    " " +
    encodeURIComponent(url) +
    "&new_post[tags]=" +
    encodeURIComponent(tag);
  var a = window.open(href, "me2Day", "");
  if (a) {
    a.focus();
  }
}
/**
 * 카카오스토리 공유
 * @param msg 메세지
 * @param url 링크
 */
function shareKakaostory(url) {
  var href = "https://story.kakao.com/share?url=" + encodeURIComponent(url);
  var a = window.open(href, "kakaostory", "");
  if (a) {
    a.focus();
  }
}

/**
 * 에버노트 공유
 * @param msg 메세지
 * @param url 링크
 */
function shareEvernote(msg, url) {
  var href =
    "http://evernote.com/grclip?title=" +
    encodeURIComponent(msg) +
    "&url=" +
    encodeURIComponent(url);
  var a = window.open(href, "evernote", "");
  if (a) {
    a.focus();
  }
}
/**
 * 포켓 공유
 * @param msg 메세지
 * @param url 링크
 */
function sharePocket(url) {
  var href = "https://getpocket.com/edit?url=" + encodeURIComponent(url);
  var a = window.open(href, "pocket", "");
  if (a) {
    a.focus();
  }
}

/**
 * 클래스팅 공유
 * @param msg 메세지
 * @param url 링크
 */
function shareClassting(msg, url) {
  var image =
    "https://www.career.go.kr/cnet/prototype/SmartEditorImgDownload.do?fileDown=2017/08/29/14/sns_share.png";
  var href =
    "http://www.classting.com/classting/4_Share.php?source=share_type1&image=" +
    encodeURIComponent(image) +
    "&title=" +
    encodeURIComponent(
      "교육부와 커리어넷에서 제공하는 '" + msg + "'콘텐츠를 소개합니다."
    ) +
    "&url=" +
    encodeURIComponent(url);

  var a = window.open(href, "classting", "");
  if (a) {
    a.focus();
  }
}

/**
 * 페이스북 공유
 * @param msg 메세지
 * @param url 링크
 */
function pstFaceBook(msg, url, seq) {
  url = url.substring(0, url.indexOf("?")).concat("?SEQ=" + seq);
  var href = "http://www.facebook.com/sharer.php?u=" + url; //+ "&t=" + encodeURIComponent(msg);
  var a = window.open(href, "facebook", "");
  if (a) {
    a.focus();
  }
}

/**
 * 요즘 공유
 * @param link 링크
 * @param prefix 메세지
 * @param parameter
 */
function pstYozmDaum(link, prefix, seq) {
  link = link.substring(0, link.indexOf("?")).concat("?SEQ=" + seq);
  var href =
    "http://yozm.daum.net/api/popup/prePost?link=" +
    encodeURIComponent(link) +
    "&prefix=" +
    encodeURIComponent(prefix);
  var a = window.open(href, "yozm", "width=466, height=356");
  if (a) {
    a.focus();
  }
}

/**
 * 프론트 웹 에버노트 공유
 * @param msg 메세지
 * @param url 링크
 */
function pstEvernote(msg, url, seq) {
  url = url.substring(0, url.indexOf("?")).concat("?SEQ=" + seq);

  var href =
    "http://evernote.com/grclip?title=" +
    encodeURIComponent(msg) +
    "&url=" +
    encodeURIComponent(url);
  var a = window.open(href, "evernote", "");
  if (a) {
    a.focus();
  }
}

/**
 * 프론트 웹 카카오스토리 공유
 * @param msg 메세지
 * @param url 링크
 */
function pstKakaostory(msg, url, seq) {
  url = url.substring(0, url.indexOf("?")).concat("?SEQ=" + seq);

  var href = "https://story.kakao.com/share?url=" + encodeURIComponent(url);
  var a = window.open(href, "kakaostory", "");
  if (a) {
    a.focus();
  }
}
/**
 * 프론트 웹 포켓 공유
 * @param msg 메세지
 * @param url 링크
 */
function pstPocket(msg, url, seq) {
  url = url.substring(0, url.indexOf("?")).concat("?SEQ=" + seq);

  var href = "https://getpocket.com/edit?url=" + encodeURIComponent(url);
  var a = window.open(href, "pocket", "");
  if (a) {
    a.focus();
  }
}

/**
 * 분야별 직업정보 상세 트위터 공유
 * @param msg 메세지
 * @param url 링크
 */
function pstTwitterRealmJob(msg, url, seq, pageGubun) {
  url = url.substring(0, url.indexOf("?")).concat("?SEQ=" + seq);
  url = url.concat("&pageGubun=" + pageGubun);
  var href =
    "http://twitter.com/home?status=" +
    encodeURIComponent(msg) +
    " " +
    encodeURIComponent(url);
  var a = window.open(href, "twitter", "");
  if (a) {
    a.focus();
  }
}

/**
 * 분야별 직업정보 상세 미투데이 공유
 * @param msg 메세지
 * @param url 링크
 * @param tag 메세지
 */
function pstMe2DayRealmJob(msg, url, tag, seq, pageGubun) {
  url = url.substring(0, url.indexOf("?")).concat("?SEQ=" + seq);
  url = url.concat("&pageGubun=" + pageGubun);
  var href =
    "http://me2day.net/posts/new?new_post[body]=" +
    encodeURIComponent(msg) +
    " " +
    encodeURIComponent(url) +
    "&new_post[tags]=" +
    encodeURIComponent(tag);
  var a = window.open(href, "me2Day", "");
  if (a) {
    a.focus();
  }
}

/**
 * 분야별 직업정보 상세 페이스북 공유
 * @param msg 메세지
 * @param url 링크
 */
function pstFaceBookRealmJob(msg, url, seq, pageGubun) {
  url = url.substring(0, url.indexOf("?")).concat("?SEQ=" + seq);
  url = url.concat("&pageGubun=" + pageGubun);
  var href = "http://www.facebook.com/sharer.php?u=" + url; //+ "&t=" + encodeURIComponent(msg);
  var a = window.open(href, "facebook", "");
  if (a) {
    a.focus();
  }
}

/**
 * 분야별 직업정보 상세 요즘 공유
 * @param link 링크
 * @param prefix 메세지
 * @param parameter
 */
function pstYozmDaumRealmJob(link, prefix, seq, pageGubun) {
  link = link.substring(0, link.indexOf("?")).concat("?SEQ=" + seq);
  link = link.concat("&pageGubun=" + pageGubun);
  var href =
    "http://yozm.daum.net/api/popup/prePost?link=" +
    encodeURIComponent(link) +
    "&prefix=" +
    encodeURIComponent(prefix);
  var a = window.open(href, "yozm", "width=466, height=356");
  if (a) {
    a.focus();
  }
}

/*********************************************************************************************
 * 문자제거 (날자, 금액에서 특정문자 게거)                                                    *
 *********************************************************************************************/
function fnRemoveFormat(val) {
  var tmp = "";
  var str = "";
  if (val.indexOf(",") != -1) {
    //숫자
    for (var i = 0; i < val.length; i++) {
      str = val.substr(i, 1);
      if (i == 0) {
        if (str != "." && str != "," && str != "/" && str != ":") {
          tmp += str;
        }
      } else {
        if (str != "-" && str != "," && str != "/" && str != ":") {
          tmp += str;
        }
      }
    }
  } else {
    for (var i = 0; i < val.length; i++) {
      str = val.substr(i, 1);
      if (str != "." && str != "-" && str != "," && str != "/" && str != ":") {
        tmp += str;
      }
    }
  }
  return tmp;
}

//=======================================================================
// 입력시 자동으로 날짜포맷(년월일)한다.
//=======================================================================
function makeDate(event, obj) {
  event = event ? event : window.event;
  // 백스페이스키 무시
  if (event) {
    if (
      event.keyCode == 8 ||
      event.keyCode == 9 ||
      event.keyCode == 13 ||
      (event.keyCode >= 37 && event.keyCode <= 40)
    ) {
      return false;
    }
  }
  var str = fnRemoveFormat(obj.value);

  if (str.length == 4) {
    obj.value = str + "-";
  } else if (str.length == 6) {
    obj.value = str.substring(0, 4) + "-" + str.substring(4, 6);
  } else if (str.length >= 8) {
    obj.value =
      str.substring(0, 4) +
      "-" +
      str.substring(4, 6) +
      "-" +
      str.substring(6, 8);
  }

  if (
    parseInt(obj.value.substr(5, 2)) > 12 ||
    parseInt(obj.value.substr(8, 2)) > 31 ||
    obj.value.substr(8, 2) == "00" ||
    obj.value.substr(5, 2) == "00"
  ) {
    alert("날짜 형식에 맞게 입력하시기 바랍니다.");
    return;
  }
}

function fn_fromToChk() {
  if ($("#searchStartDt").val() != "") {
    if ($("#searchStartDt").val().length < 10) {
      alert("검색 시작일을 정확히 입력하시기 바랍니다.");
      $("#searchStartDt").focus();
      return false;
    }
    if ($("#searchEndDt").val() == "") {
      alert("검색 종료일을 입력하시기 바랍니다.");
      $("#searchEndDt").focus();
      return false;
    }
  }
  if ($("#searchEndDt").val() != "") {
    if ($("#searchEndDt").val().length < 10) {
      alert("검색 종료일을 정확히 입력하시기 바랍니다.");
      $("#searchEndDt").focus();
      return false;
    }
    if ($("#searchStartDt").val() == "") {
      alert("검색 시작일을 입력하시기 바랍니다.");
      $("#searchStartDt").focus();
      return false;
    }
  }

  var inSta = fnRemoveFormat($("#searchStartDt").val());
  var inEnd = fnRemoveFormat($("#searchEndDt").val());
  if (parseInt(inSta) > parseInt(inEnd)) {
    alert("검색 시작일과 종료일을 다시 확인하시기 바랍니다.");
    $("#searchEndDt").focus();
    return false;
  }
  return true;
}

function fileLinkDown(name, path) {
  location.href =
    "/cnet/commonBiz/download.do?file_name=" +
    encodeURIComponent(name) +
    "&path=" +
    path;
}

function examenSNS(a, examen, sns, type) {
  var snsUrl, snsMsg;
  switch (examen) {
    case 1:
      snsUrl = "https://www.career.go.kr/cnet/front/examen/examenMain.do";
      snsMsg = "커리어넷에서 직업적성검사를 실시했습니다.";
      break;
    case 2:
      snsUrl = "https://www.career.go.kr/cnet/front/examen/examenMain.do";
      snsMsg = "커리어넷에서 진로성숙도검사를 실시했습니다.";
      break;
    case 3:
      snsUrl = "https://www.career.go.kr/cnet/front/examen/inspctMain.do";
      if (type == "K")
        snsMsg = "커리어넷에서 직업흥미검사(K형)를 실시했습니다.";
      else if (type == "H")
        snsMsg = "커리어넷에서 직업흥미검사(H형)를 실시했습니다.";
      else snsMsg = "커리어넷에서 직업흥미검사를 실시했습니다.";
      break;
    case 4:
      snsUrl = "https://www.career.go.kr/cnet/front/examen/examenMain.do";
      snsMsg = "커리어넷에서 직업가치관검사를 실시했습니다.";
      break;
    //아로플러스
    case 5:
      snsUrl = "https://www.career.go.kr/cnet/front/examen/aroplusMain.do";
      snsMsg =
        "커리어넷에서 아로플러스:직업상세능력을 통한 진로탐색을 실시했습니다.";
      break;
    case 6:
      snsUrl = "https://www.career.go.kr/cnet/front/examen/aroplusMain.do";
      snsMsg =
        "커리어넷에서 아로플러스:관심직업종합을 통한 진로탐색을 실시했습니다.";
      break;
    case 7:
      snsUrl = "https://www.career.go.kr/cnet/front/examen/aroplusMain.do";
      snsMsg =
        "커리어넷에서 아로플러스:관심직업을 통한 진로탐색을 실시했습니다.";
      break;
    case 8:
      snsUrl = "https://www.career.go.kr/cnet/front/examen/aroplusMain.do";
      snsMsg =
        "커리어넷에서 아로플러스:자기이해종합을 통한 진로탐색을 실시했습니다.";
      break;
    //진로상담
    case 9:
      snsUrl = "https://www.career.go.kr/cnet/front/counsel/counselMain.do";
      snsMsg = "내가 신청한 커리어넷 진로상담의 답변이 완료되었어요.";
      break;

    case 10:
      snsUrl = "https://www.career.go.kr/cnet/front/examen/examenMain.do";
      snsMsg = "커리어넷에서 주요능력효능감검사를 실시했습니다.";
      break;

    case 11:
      snsUrl = "https://www.career.go.kr/cnet/front/examen/examenMain.do";
      snsMsg = "커리어넷에서 이공계전공적합도검사를 실시했습니다.";
      break;
    case 12:
      snsUrl = "https://www.career.go.kr/cnet/front/examen/examenMain.do";
      snsMsg = "커리어넷에서 진로개발준비도검사를 실시했습니다.";
      break;
    default:
      snsUrl = "https://www.career.go.kr/cnet/front/examen/examenMain.do";
      snsMsg = "커리어넷에서 직업적성검사를 실시했습니다.";
  }

  var url = "";
  switch (sns) {
    case 1:
      if (snsUrl == null) {
        snsUrl =
          "https://www.career.go.kr/cnet/front/examen/inspctMain.do?examen=" +
          examen;
        if (type) {
          snsUrl =
            "https://www.career.go.kr/cnet/front/examen/inspctMain.do?examen=" +
            examen +
            "&type=" +
            type;
        }
      }
      if (
        navigator.userAgent.match(
          /iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i
        ) != null ||
        navigator.userAgent.match(/LG|SAMSUNG|Samsung/) != null
      ) {
        // 모바일 접속시
        url =
          "http://m.facebook.com/sharer.php?u=" + encodeURIComponent(snsUrl);
      } else {
        url =
          "http://www.facebook.com/sharer.php?s=100&p[url]=" +
          encodeURIComponent(snsUrl);
      }
      break;
    //case 1 : url = 'http://www.facebook.com/sharer.php?u='+encodeURIComponent(snsUrl); break;
    case 2:
      url =
        "http://twitter.com/?status=" +
        encodeURIComponent(snsMsg) +
        "+++" +
        encodeURIComponent(snsUrl);
      break;
    case 3:
      url =
        'http://me2day.net/posts/new?new_post[body]="' +
        encodeURIComponent(snsMsg) +
        '":' +
        encodeURIComponent(snsUrl);
      break;
    //	case 4 : url = 'http://yozm.daum.net/api/popup/prePost?prefix='+encodeURIComponent(snsMsg)+'&link='+encodeURIComponent(snsUrl); break;
    case 4:
      url =
        "http://www.classting.com/classting/4_Share.php?source=share_type1&title=" +
        encodeURIComponent(snsMsg) +
        "&url=" +
        encodeURIComponent(snsUrl);
      break;
    case 5:
      url = "https://story.kakao.com/share?url=" + encodeURIComponent(snsUrl);
      break;
    case 6:
      url =
        "http://evernote.com/grclip?title=" +
        encodeURIComponent(snsMsg) +
        "&url=" +
        encodeURIComponent(snsUrl);
      break;
    case 7:
      url = "https://getpocket.com/edit?url=" + encodeURIComponent(snsUrl);
      break;
    default:
      return false;
  }
  $(a).attr("href", url);
  return true;
}
function ajaxState(jqXHR, textStatus) {
  if (jqXHR.status == 500) {
    alert(
      "서버에서 에러가 발생하였습니다.\n잠시 후 다시 시도하여 주십시오.\n계속 에러가 발생할 경우 관리자에게 문의하십시오."
    );
  }
}
function classting(a, kind, moveImage, movieSEQ, pageGubun, seq) {
  var url,
    movieUrl,
    title,
    text = "";
  var image = "https://www.career.go.kr/webres/images/front/common/logo.png";
  if (moveImage) image = moveImage;
  switch (kind) {
    case 1:
      url =
        "https://www.career.go.kr/cnet/front/base/major/FhiSchMajorView?SEQ=" +
        seq;
      title = "커리어넷 학과정보(고등학생) - " + pageGubun;
      text = "커리어넷 학과정보입니다.";
      break;
    case 2:
      url =
        "https://www.career.go.kr/cnet/front/base/major/FhiSchMajorView?SEQ=" +
        seq;
      title = "커리어넷 학과정보(대학교) - " + pageGubun;
      text = "커리어넷 학과정보입니다.";
      break;
    case 4:
      url = "https://www.career.go.kr/cnet/front/web/uccBbsView.do?SEQ=" + seq;
      title = "커리어넷 UCC - " + pageGubun;
      text = "커리어넷 UCC 정보입니다.";
      break;
    case 5:
      url =
        "https://www.career.go.kr/cnet/front/web/kficBbsView.do.do?SEQ=" + seq;
      title = "커리어넷 UCC - " + pageGubun;
      text = "한국의 미래와 창의적 진로 UCC 공모전 정보입니다.";
      break;
    default:
      url =
        "https://www.career.go.kr/cnet/front/base/job/jobView.do?SEQ=" + seq;
      title = "커리어넷 직업정보 - " + pageGubun;
      text = "커리어넷 직업정보입니다.";
      if (movieSEQ) {
        movieUrl =
          "https://www.career.go.kr/cnet/front/web/jobIntvViewPopup.do?seq=" +
          movieSEQ;
        //text += pageGubun+"인터뷰 바로가기☞"+movieUrl+"";
        text += " 직업인동영상(" + pageGubun + ") 바로가기☞" + movieUrl + "";
      }
    //text = "<h4>커리어넷 직업정보</h4>";
    //text += moveImage.length ? '<a href="'+movieUrl+'" target="_blank"><img src="'+moveImage+'" width="50"/></a>':'<a href="'+movieUrl+'" target="_blank">동영상 바로가기</a>';
  }
  var href =
    "http://www.classting.com/classting/4_Share.php?source=share_type1&image=" +
    encodeURIComponent(image) +
    "&title=" +
    encodeURIComponent(title) +
    "&text=" +
    encodeURIComponent(text) +
    "&url=" +
    encodeURIComponent(url);
  $(a).attr("href", href);
  return true;
}

//숫자 체크
function verChk(txt, obj) {
  for (var i = 0; i < obj.val().length; i++) {
    if (obj.val().charAt(i) < "0" || obj.val().charAt(i) > "9") {
      alert(txt + " 숫자로만 입력 하여야 합니다.");
      obj.val("");
      obj.focus();
      return false;
    }
  }
}

function loading() {
  //progress 바
  if ($("#loadLayer").length < 1) {
    $("body").append(
      '<section class="layer-popup" id="loadLayer"><p><img src="/webres/images/admin/common/ic_loading.gif" alt="로딩중" class="imgLoading" /></p><p>로딩중입니다..</p></section><div id="mask"></div>'
    );
    var currentscrollpos = $(window).scrollTop();
    var layerHeight = $(".layer-popup").height();
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    var windowHeight = $(window).height();
    $("#mask").addClass("mask-on");
    $("#mask").css({ width: maskWidth, height: maskHeight + 550 });
    $("#mask").show();
    $(window).resize(function () {
      var maskHeight = $(document).height();
      var maskWidth = $(window).width();
      $("#mask").css({ width: maskWidth, height: maskHeight });
    });
    $("#loadLayer").show();
  }
}

function closeLoading() {
  $("#loadLayer").remove();
  $("#mask").remove();
}

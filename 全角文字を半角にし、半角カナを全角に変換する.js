var sc = new ActiveXObject("StrConv.StrConv");
document.selection.SelectAll();
document.selection.Text = sc.HalfWidth(document.selection.Text);
document.selection.SelectAll();
document.selection.Text = sc.FullKatanaka(document.selection.Text);
document.selection.Replace("~", "〜", meFindNext | meFindReplaceRegExp | meReplaceAll);
sc = "";

var sc = new ActiveXObject("StrConv.StrConv");
document.selection.Text = sc.Katakana(document.selection.Text);
sc = "";

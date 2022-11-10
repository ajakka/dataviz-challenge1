const parseExcel = (file) => {
  const reader = new FileReader();

  reader.onload = (e) => {
    const data = e.target.result;
    const workbook = XLSX.read(data, {
      type: "binary",
    });

    workbook.SheetNames.forEach((sheetName) => {
      // Here is your object
      const XL_row_object = XLSX.utils.sheet_to_row_object_array(
        workbook.Sheets[sheetName]
      );
      const json_object = JSON.stringify(XL_row_object);
      console.log(json_object);
    });
  };

  reader.onerror = (ex) => {
    console.log(ex);
  };

  reader.readAsBinaryString(file);
};

const excelPicker = document.getElementById("excel-picker");
excelPicker.addEventListener("change", (ev) => {
  parseExcel(excelPicker.files[0]);
});

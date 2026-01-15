/**
 * Export data to CSV format
 * @param data Array of objects to export
 * @param filename Name of the file to download
 */
export function exportToCSV(data: any[], filename: string) {
  if (!data || data.length === 0) {
    console.warn("No data to export")
    return
  }

  // Get headers from first object
  const headers = Object.keys(data[0])
  
  // Create CSV content
  const csvContent = [
    headers.join(","),
    ...data.map(row => 
      headers.map(header => {
        const value = row[header]
        // Handle values with commas or quotes
        if (typeof value === "string" && (value.includes(",") || value.includes('"'))) {
          return `"${value.replace(/"/g, '""')}"`
        }
        return value
      }).join(",")
    )
  ].join("\n")

  // Create blob and download
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
  const link = document.createElement("a")
  const url = URL.createObjectURL(blob)
  
  link.setAttribute("href", url)
  link.setAttribute("download", filename.endsWith(".csv") ? filename : `${filename}.csv`)
  link.style.visibility = "hidden"
  
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

/**
 * Format data for export with custom column mapping
 * @param data Array of data to format
 * @param columnMap Object mapping internal keys to display names
 */
export function formatForExport(data: any[], columnMap: Record<string, string>) {
  return data.map(item => {
    const formattedItem: Record<string, any> = {}
    Object.entries(columnMap).forEach(([key, displayName]) => {
      formattedItem[displayName] = item[key]
    })
    return formattedItem
  })
}


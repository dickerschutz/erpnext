// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt

frappe.views.calendar["Leave Application"] = {
	field_map: {
		"start": "from_date",
		"end": "to_date",
		"id": "name",
		"title": "title",
		"docstatus": 1,
		"color": "color",
		"allDay": "all_day"
	},
	prepare_colors: function(d) {
		if (d.employee != null) {
			const palette = frappe.get_palette(d.employee);
			const style = getComputedStyle(document.documentElement);
			d.backgroundColor = style.getPropertyValue(palette[0]);
			d.textColor = style.getPropertyValue(palette[1]);
		} else {
			const color_name = "gray"
			d.backgroundColor = frappe.ui.color.get(color_name, 'extra-light');
			d.textColor = frappe.ui.color.get(color_name, 'dark');
		}

		return d
	},
	options: {
		header: {
			left: 'prev,next today',
			center: 'title',
			right: 'month'
		}
	},
	get_events_method: "erpnext.hr.doctype.leave_application.leave_application.get_events"
}

// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt

frappe.views.calendar["Task"] = {
	field_map: {
		"start": "exp_start_date",
		"end": "exp_end_date",
		"id": "name",
		"title": "subject",
		"allDay": "allDay",
		"progress": "progress",
	},
	prepare_colors: function(d) {
		if (d.user != null) {
			const palette = frappe.get_palette(d.user);
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
	gantt: true,
	filters: [
		{
			"fieldtype": "Link",
			"fieldname": "project",
			"options": "Project",
			"label": __("Project")
		}
	],
	get_events_method: "erpnext.projects.doctype.task.task.get_events"
}

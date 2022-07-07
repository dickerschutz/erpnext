frappe.ui.form.on("Activity Type", {
	onload: function(frm) {
		frm.set_currency_labels(["billing_rate", "costing_rate"], frappe.defaults.get_global_default('currency'));
	},

	refresh: function(frm) {
		frm.add_custom_button(__("Activity Cost per Employee"), function() {
			const route_options = {"activity_type": frm.doc.name};
			frappe.set_route("List", "Activity Cost", route_options);
		});
	}
});

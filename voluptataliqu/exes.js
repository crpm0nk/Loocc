on(this.checkboxNode, 'change', function(event) {
    // Handle the change event for the checkbox
    console.log('Checkbox changed:', this);
}.bind(this));

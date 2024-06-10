async function updateIssue(element) {
    // Get the selected status from the dropdown
    const statusDropdown = document.getElementById('status-dropdown');
    const status = statusDropdown.options[statusDropdown.selectedIndex].value;
    const issueId = parseInt(element.dataset.issueId);
    const projectId = parseInt(element.dataset.projectId);


    // Send a PUT request to update the issue
    const response = await fetch(`/project/${projectId}/issues/editIssue?issueId=${issueId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
    });

    // Check if the request was successful
    if (response.ok) {
        // Redirect to the issue page
        window.location.href = `/project/${projectId}/issues/getIssue?issueId=${issueId}`;
    } else {
        // Handle errors, if any
        console.error('Failed to update the issue');
    }
}

function updateStatusColor(element) {
    // Get the selected status from the dropdown
    const statusDropdown = document.getElementById('status-dropdown');
    const status = statusDropdown.options[statusDropdown.selectedIndex].value;

    // Get the color map
    const statusColorMap = JSON.parse(statusDropdown.dataset.colorMap);
    // console.log(statusColorMap);

    // Remove all existing color classes
    Object.values(statusColorMap).forEach(colorClass => {
        statusDropdown.classList.remove(colorClass);
        // console.log(colorClass);
    });

    // Add the new color class
    const newColorClass = statusColorMap[status] || 'color-deep-violet';
    statusDropdown.classList.add(newColorClass);
    // console.log('newColorClass', newColorClass);
}

document.addEventListener('DOMContentLoaded', updateStatusColor);
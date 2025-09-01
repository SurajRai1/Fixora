export const troubleshootingData = [
    {
        title: "Performance Issues",
        desc: "Slow, freezing, crashing",
        iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
        guides: [
            {
                category: "Performance",
                title: "10 Ways to Speed Up a Slow Laptop",
                description: "Is your laptop crawling? Follow these simple steps to make it run like new again.",
                imageUrl: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                categoryColor: "text-blue-600",
                featured: true,
                solution: [
                    { title: "Restart Your Computer", description: "This clears temporary files and closes background processes. It's the simplest and often most effective first step." },
                    { title: "Check for Malware", description: "Run a full scan with your antivirus software. Malware can consume significant system resources." },
                    { title: "Free Up Disk Space", description: "Use the Disk Cleanup tool (Windows) or a similar utility (macOS) to remove temporary files, system files, and empty the Recycle Bin." },
                    { title: "Limit Startup Programs", description: "Too many programs launching at startup can slow down your boot time and run in the background. Disable unnecessary ones in the Task Manager (Startup tab) or System Preferences." },
                    { title: "Update Your OS and Drivers", description: "Ensure Windows or macOS is fully updated, along with drivers for your graphics card and other hardware." },
                    { title: "Add More RAM", description: "If your laptop supports it, adding more RAM can significantly improve performance, especially if you frequently run multiple applications." },
                    { title: "Switch to an SSD", description: "Replacing a traditional hard drive with a solid-state drive (SSD) can dramatically improve boot times and overall system responsiveness." },
                    { title: "Disable Visual Effects", description: "Turn off unnecessary visual effects and animations in your system settings to free up resources for more important tasks." }
                ]
            },
            {
                category: "Performance",
                title: "How to Cool Down an Overheating Laptop",
                description: "An overheating laptop can cause slowdowns and permanent damage. Here's how to fix it.",
                imageUrl: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                categoryColor: "text-blue-600",
                featured: false,
                solution: [
                    { title: "Check and Clean Air Vents", description: "Dust is the number one enemy. Use a can of compressed air to blow dust out of the intake and exhaust vents." },
                    { title: "Use on a Hard, Flat Surface", description: "Using your laptop on a bed or carpet blocks the vents. Always use it on a table or desk." },
                    { title: "Check the Fan", description: "Listen to see if you can hear the fan running. If it's silent or making grinding noises, it may need to be repaired or replaced." },
                    { title: "Monitor CPU Usage", description: "Open Task Manager (Windows) or Activity Monitor (macOS) to see if a specific program is using 100% of your CPU, causing it to overheat." },
                    { title: "Use a Laptop Cooling Pad", description: "A cooling pad with additional fans can help improve airflow and reduce temperatures significantly." },
                    { title: "Lower Performance Settings", description: "Reduce your laptop's performance settings or switch to power-saving mode to decrease heat generation." }
                ]
            },
            {
                category: "Performance",
                title: "Laptop Fan is Constantly Loud",
                description: "A loud fan can be distracting and may indicate an underlying issue with cooling.",
                imageUrl: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                categoryColor: "text-blue-600",
                featured: false,
                solution: [
                    { title: "Identify Resource-Hungry Processes", description: "Open Task Manager (Ctrl+Shift+Esc) or Activity Monitor to see which applications are using the most CPU. Closing them may quiet the fan." },
                    { title: "Clean the Vents and Fan", description: "Dust buildup makes the fan work harder. Power down, unplug, and use compressed air to clean all ventilation slots." },
                    { title: "Elevate Your Laptop", description: "Use a laptop stand to improve airflow underneath the device, which helps with cooling and reduces fan speed." },
                    { title: "Scan for Malware", description: "Some malicious software can run intensive background tasks, causing the CPU to work hard and the fan to spin constantly." },
                    { title: "Check Background Applications", description: "Look for applications running in the background that you don't need. Close unnecessary programs to reduce CPU load." },
                    { title: "Update BIOS/UEFI", description: "Sometimes a BIOS update can improve fan control algorithms and reduce unnecessary fan noise." }
                ]
            },
            {
                category: "Performance",
                title: "Laptop Takes Forever to Boot Up",
                description: "Slow boot times can be frustrating. Here's how to get your laptop starting faster.",
                imageUrl: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                categoryColor: "text-blue-600",
                featured: true,
                solution: [
                    { title: "Disable Startup Programs", description: "Open Task Manager > Startup tab and disable programs you don't need immediately when Windows starts." },
                    { title: "Enable Fast Startup", description: "In Power Options > Choose what the power buttons do, enable 'Turn on fast startup' if it's not already enabled." },
                    { title: "Run Disk Cleanup", description: "Clean up temporary files and system files that might be slowing down the boot process." },
                    { title: "Check for Malware", description: "Run a full system scan as malware can significantly slow down boot times." },
                    { title: "Update Windows", description: "Ensure your system is fully updated as newer versions often include boot time improvements." },
                    { title: "Consider an SSD Upgrade", description: "If you're still using a traditional hard drive, upgrading to an SSD will dramatically improve boot times." }
                ]
            },
            {
                category: "Performance",
                title: "Laptop Randomly Freezes or Crashes",
                description: "Random freezes and crashes can be caused by various issues. Here's how to diagnose and fix them.",
                imageUrl: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                categoryColor: "text-blue-600",
                featured: false,
                solution: [
                    { title: "Check Event Viewer", description: "Open Event Viewer in Windows to look for error messages that occurred around the time of crashes." },
                    { title: "Run Memory Diagnostic", description: "Use Windows Memory Diagnostic tool to check for RAM issues that could cause crashes." },
                    { title: "Update All Drivers", description: "Outdated or corrupt drivers are a common cause of system instability. Update graphics, network, and other hardware drivers." },
                    { title: "Check Hard Drive Health", description: "Run CHKDSK or use a tool like CrystalDiskInfo to check if your hard drive is failing." },
                    { title: "Monitor Temperatures", description: "Use software like HWiNFO64 to monitor CPU and GPU temperatures. Overheating can cause crashes." },
                    { title: "Test in Safe Mode", description: "If crashes don't occur in Safe Mode, the issue is likely software-related rather than hardware." },
                    { title: "Check Power Supply", description: "A failing power adapter or battery can cause random shutdowns and crashes." }
                ]
            },
            {
                category: "Performance",
                title: "High CPU Usage Slowing Down Laptop",
                description: "When your CPU is constantly at 100%, everything slows down. Here's how to identify and fix the cause.",
                imageUrl: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                categoryColor: "text-blue-600",
                featured: false,
                solution: [
                    { title: "Open Task Manager", description: "Press Ctrl+Shift+Esc to open Task Manager and click on the CPU column to sort by usage and identify the culprit." },
                    { title: "End High-Usage Processes", description: "Right-click on processes using high CPU and select 'End task' - but be careful not to end critical system processes." },
                    { title: "Restart Windows Explorer", description: "If explorer.exe is using high CPU, restart it by ending the process and running it again from Task Manager." },
                    { title: "Check for Malware", description: "Run a full antivirus scan as malware often causes high CPU usage." },
                    { title: "Disable Windows Search", description: "Temporarily disable Windows Search service if it's causing high CPU usage during indexing." },
                    { title: "Update Windows", description: "Install all Windows updates as they often include fixes for high CPU usage issues." },
                    { title: "Check for Driver Issues", description: "Outdated or faulty drivers can cause high CPU usage. Update all device drivers." }
                ]
            }
        ]
    },
    {
        title: "Battery & Power",
        desc: "Not charging, draining fast",
        iconPath: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
        guides: [
            {
                category: "Power",
                title: "Laptop Not Charging? Here's How to Fix It",
                description: "Troubleshoot the most common reasons your laptop's battery won't charge.",
                imageUrl: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                categoryColor: "text-amber-500",
                featured: true,
                solution: [
                    { title: "Check All Connections", description: "Ensure the power adapter is firmly plugged into the wall and your laptop. Check for any damage to the cable." },
                    { title: "Try a Different Outlet", description: "The issue might be with the wall socket. Plug into a different outlet to rule this out." },
                    { title: "Remove and Reinsert the Battery", description: "If your laptop has a removable battery, shut it down, remove the battery, wait a minute, then reinsert it and try charging again." },
                    { title: "Update or Reinstall Battery Drivers", description: "In Device Manager (Windows), find 'Batteries', uninstall 'Microsoft ACPI-Compliant Control Method Battery', then scan for hardware changes to reinstall it." },
                    { title: "Check Charging Port", description: "Inspect the charging port for debris or damage. Clean gently with compressed air if needed." },
                    { title: "Test with Different Charger", description: "If possible, try a compatible charger from another laptop to determine if the issue is with your charger." },
                    { title: "Calibrate the Battery", description: "Fully discharge the battery, then charge it to 100% without interruption to recalibrate the battery meter." }
                ]
            },
            {
                category: "Power",
                title: "Battery Drains Too Fast",
                description: "If your laptop battery doesn't last as long as it used to, these tips can help extend its life.",
                imageUrl: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                categoryColor: "text-amber-500",
                featured: true,
                solution: [
                    { title: "Check Battery Health", description: "Use built-in battery reports (Windows: powercfg /batteryreport) to see if your battery is degraded and needs replacement." },
                    { title: "Reduce Screen Brightness", description: "The display is one of the biggest power drains. Lower the brightness to a comfortable level." },
                    { title: "Use Power Saver Mode", description: "Enable power saving mode in your system settings to automatically optimize settings for battery life." },
                    { title: "Close Unnecessary Applications", description: "Check Task Manager for applications using high CPU or running in the background unnecessarily." },
                    { title: "Disable Wi-Fi and Bluetooth", description: "Turn off wireless radios when not needed to save significant battery power." },
                    { title: "Adjust Sleep Settings", description: "Configure your laptop to sleep or hibernate after shorter periods of inactivity." },
                    { title: "Update Drivers and OS", description: "Newer drivers and OS versions often include better power management features." }
                ]
            },
            {
                category: "Power",
                title: "My Laptop Won't Turn On",
                description: "Diagnose the issue when your laptop shows no signs of life after pressing the power button.",
                imageUrl: "https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                categoryColor: "text-amber-500",
                featured: true,
                solution: [
                    { title: "Check the Power Source", description: "Ensure the laptop is plugged into a working wall outlet and that the charger's light (if it has one) is on. Try a different outlet." },
                    { title: "Perform a Hard Reset", description: "Unplug the AC adapter and remove the battery (if possible). Press and hold the power button for 15-20 seconds. Re-insert the battery, plug in the adapter, and try to turn it on." },
                    { title: "Test the AC Adapter", description: "If you have a compatible adapter from another laptop, try using it. If the laptop powers on, your original adapter is likely faulty." },
                    { title: "Check for Signs of Life", description: "Listen for fan noise or look for any indicator lights. If you see or hear anything, the problem may be with the display, not the power." },
                    { title: "Try External Monitor", description: "Connect an external monitor to see if the laptop is actually booting but the screen isn't working." },
                    { title: "Check RAM", description: "If you're comfortable doing so, try reseating the RAM modules as loose RAM can prevent booting." }
                ]
            },
            {
                category: "Power",
                title: "Laptop Shuts Down Randomly",
                description: "Random shutdowns can be caused by overheating, power issues, or hardware problems.",
                imageUrl: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                categoryColor: "text-amber-500",
                featured: false,
                solution: [
                    { title: "Check for Overheating", description: "Feel if the laptop is hot and listen for fan noise. Clean vents and ensure proper ventilation." },
                    { title: "Test the Battery", description: "Try running the laptop with just AC power (battery removed) to see if the battery is causing shutdowns." },
                    { title: "Check Event Logs", description: "Look in Windows Event Viewer for critical errors that occurred around the time of shutdowns." },
                    { title: "Update BIOS", description: "Check manufacturer's website for BIOS updates that might fix power management issues." },
                    { title: "Test RAM", description: "Run Windows Memory Diagnostic to check for faulty RAM that could cause crashes." },
                    { title: "Check Power Settings", description: "Ensure power settings aren't configured to shut down the laptop under certain conditions." }
                ]
            },
            {
                category: "Power",
                title: "Power Button Not Working",
                description: "When the power button stops responding, here are alternative ways to turn on your laptop.",
                imageUrl: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                categoryColor: "text-amber-500",
                featured: false,
                solution: [
                    { title: "Try Keyboard Power On", description: "Some laptops can be turned on by pressing specific key combinations like Fn+Power or just pressing any key." },
                    { title: "Check BIOS Settings", description: "If you can access BIOS, look for 'Power On by Keyboard' or similar settings to enable alternative power methods." },
                    { title: "Clean the Power Button", description: "Use compressed air to clean around the power button in case debris is preventing proper contact." },
                    { title: "Try External Keyboard", description: "Connect a USB keyboard and try using its power key if available." },
                    { title: "Check for Stuck Button", description: "Gently press around the power button to see if it's physically stuck or damaged." },
                    { title: "Professional Repair", description: "If none of these work, the power button may need professional repair or replacement." }
                ]
            },
            {
                category: "Power",
                title: "Laptop Only Works When Plugged In",
                description: "If your laptop won't run on battery power alone, the battery likely needs attention.",
                imageUrl: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                categoryColor: "text-amber-500",
                featured: false,
                solution: [
                    { title: "Check Battery Health", description: "Generate a battery report (Windows: powercfg /batteryreport) to see the battery's condition and capacity." },
                    { title: "Calibrate the Battery", description: "Fully discharge the battery, then charge it to 100% without interruption to recalibrate the battery meter." },
                    { title: "Update Battery Drivers", description: "In Device Manager, uninstall and reinstall the battery drivers under the 'Batteries' section." },
                    { title: "Check Battery Connections", description: "If the battery is removable, clean the contacts and ensure it's properly seated." },
                    { title: "BIOS Battery Settings", description: "Check BIOS for any battery-related settings that might be causing issues." },
                    { title: "Consider Battery Replacement", description: "If the battery health report shows significant degradation, it may be time for a new battery." }
                ]
            }
        ]
    },
    {
        title: "Connectivity",
        desc: "Wi-Fi, Bluetooth problems",
        iconPath: "M8.128 19.825A1.5 1.5 0 0110 18.5v-2.25a1.5 1.5 0 011.5-1.5h.03a1.5 1.5 0 011.5 1.5v2.25a1.5 1.5 0 01-1.872 1.325A9 9 0 1119.5 10.5h.03a1.5 1.5 0 011.5 1.5v2.25a1.5 1.5 0 01-1.5 1.5h-2.25a1.5 1.5 0 01-1.5-1.5v-.03a9 9 0 01-11.872-1.325z",
        guides: [
            {
                category: "Connectivity",
                title: "How to Fix Common Wi-Fi Connection Issues",
                description: "Can't connect to the internet? This guide will walk you through the most common fixes.",
                imageUrl: "https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                categoryColor: "text-emerald-600",
                featured: true,
                solution: [
                    { title: "Turn Wi-Fi Off and On", description: "On your laptop, toggle the Wi-Fi off, wait a few seconds, and then turn it back on. This can reset the connection." },
                    { title: "Restart Your Router and Modem", description: "Unplug both your router and modem from power. Wait 30 seconds, then plug the modem back in first. Once it's fully on, plug in the router." },
                    { title: "Forget the Network", description: "In your Wi-Fi settings, find your network and choose the 'Forget' option. Then, reconnect and enter the password again." },
                    { title: "Update Network Adapter Drivers", description: "Go to Device Manager (Windows) or System Information (macOS) to find your network adapter and check for driver updates." },
                    { title: "Run Network Troubleshooter", description: "Use Windows built-in network troubleshooter: Settings > Network & Internet > Status > Network troubleshooter." },
                    { title: "Reset Network Settings", description: "As a last resort, reset all network settings: Settings > Network & Internet > Status > Network reset." }
                ]
            },
            {
                category: "Connectivity",
                title: "Wi-Fi Keeps Disconnecting",
                description: "If your Wi-Fi connection drops frequently, these steps can help stabilize it.",
                imageUrl: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                categoryColor: "text-emerald-600",
                featured: true,
                solution: [
                    { title: "Update Wi-Fi Drivers", description: "Outdated drivers are a common cause of connection drops. Update your network adapter drivers from the manufacturer's website." },
                    { title: "Disable Power Management", description: "In Device Manager, find your Wi-Fi adapter, go to Properties > Power Management, and uncheck 'Allow the computer to turn off this device'." },
                    { title: "Change Wi-Fi Channel", description: "Log into your router's admin panel and try changing the Wi-Fi channel to 1, 6, or 11 for 2.4GHz networks." },
                    { title: "Reset TCP/IP Stack", description: "Open Command Prompt as admin and run: netsh winsock reset, then netsh int ip reset, and restart your computer." },
                    { title: "Check for Interference", description: "Move closer to the router and check if other devices (microwaves, baby monitors) might be causing interference." },
                    { title: "Update Router Firmware", description: "Check your router manufacturer's website for firmware updates that might fix connectivity issues." }
                ]
            },
            {
                category: "Connectivity",
                title: "Fixing Bluetooth Pairing Problems",
                description: "If your headphones or mouse won't connect, these steps can help you solve Bluetooth issues.",
                imageUrl: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                categoryColor: "text-emerald-600",
                featured: false,
                solution: [
                    { title: "Ensure Bluetooth is Enabled", description: "Make sure Bluetooth is turned on both on your laptop and the device you're trying to connect." },
                    { title: "Turn Devices Off and On", description: "Restart your laptop and the Bluetooth device. A simple reboot can fix many pairing issues." },
                    { title: "Remove and Re-pair the Device", description: "In your Bluetooth settings, find the problematic device, remove it, and then go through the pairing process again." },
                    { title: "Update Bluetooth Drivers", description: "Go to the Device Manager (Windows) and find your Bluetooth adapter. Check for and install any available driver updates." },
                    { title: "Clear Bluetooth Cache", description: "In Windows, go to Settings > Devices > Bluetooth & other devices, and remove all devices, then restart and re-pair." },
                    { title: "Check Device Compatibility", description: "Ensure your devices support compatible Bluetooth versions and profiles." }
                ]
            },
            {
                category: "Connectivity",
                title: "Slow Internet Speed on Laptop",
                description: "When your laptop's internet is slower than other devices, here's how to fix it.",
                imageUrl: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                categoryColor: "text-emerald-600",
                featured: false,
                solution: [
                    { title: "Run Speed Test", description: "Use speedtest.net to compare your laptop's speed with your internet plan's promised speeds." },
                    { title: "Close Bandwidth-Heavy Applications", description: "Check Task Manager for applications using network resources like streaming services, cloud backups, or downloads." },
                    { title: "Update Network Drivers", description: "Outdated network drivers can limit speed. Download the latest drivers from your laptop manufacturer's website." },
                    { title: "Change DNS Servers", description: "Try using Google DNS (8.8.8.8, 8.8.4.4) or Cloudflare DNS (1.1.1.1) for potentially faster resolution." },
                    { title: "Disable Background Apps", description: "Turn off automatic updates and cloud syncing that might be consuming bandwidth in the background." },
                    { title: "Use 5GHz Wi-Fi", description: "If your router supports it, connect to the 5GHz band instead of 2.4GHz for faster speeds." }
                ]
            },
            {
                category: "Connectivity",
                title: "Ethernet Port Not Working",
                description: "When your wired internet connection isn't working, try these troubleshooting steps.",
                imageUrl: "https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                categoryColor: "text-emerald-600",
                featured: false,
                solution: [
                    { title: "Check Cable Connections", description: "Ensure the Ethernet cable is firmly connected to both your laptop and router/modem. Try a different cable if available." },
                    { title: "Test the Cable", description: "Try the same Ethernet cable with another device to confirm the cable isn't faulty." },
                    { title: "Update Network Drivers", description: "In Device Manager, find your Ethernet adapter and update its drivers." },
                    { title: "Enable Ethernet Adapter", description: "In Network Connections, make sure your Ethernet adapter is enabled and not disabled." },
                    { title: "Run Network Troubleshooter", description: "Use Windows network troubleshooter to automatically detect and fix common issues." },
                    { title: "Check Network Settings", description: "Ensure your network settings are configured for automatic IP and DNS assignment." }
                ]
            },
            {
                category: "Connectivity",
                title: "Can't Connect to Specific Websites",
                description: "When only certain websites won't load, the issue might be DNS or browser-related.",
                imageUrl: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                categoryColor: "text-emerald-600",
                featured: false,
                solution: [
                    { title: "Clear Browser Cache", description: "Clear your browser's cache, cookies, and browsing data, then try accessing the website again." },
                    { title: "Try Different Browser", description: "Test the website in a different browser to see if the issue is browser-specific." },
                    { title: "Flush DNS Cache", description: "Open Command Prompt as admin and run 'ipconfig /flushdns' to clear the DNS cache." },
                    { title: "Change DNS Servers", description: "Try using public DNS servers like Google (8.8.8.8) or Cloudflare (1.1.1.1)." },
                    { title: "Disable VPN/Proxy", description: "If you're using a VPN or proxy, try disabling it to see if that's blocking the website." },
                    { title: "Check Firewall Settings", description: "Ensure your firewall or antivirus isn't blocking access to the specific website." }
                ]
            }
        ]
    },
    {
        title: "System Errors",
        desc: "Blue screens, crashes",
        iconPath: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
        guides: [
            {
                category: "System Errors",
                title: "What to Do When You Get the Blue Screen of Death",
                description: "Don't panic. Understand what the BSOD means and how you can troubleshoot it effectively.",
                imageUrl: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                categoryColor: "text-red-600",
                featured: true,
                solution: [
                    { title: "Note the Error Code", description: "The Blue Screen usually displays a 'STOP CODE'. Write this down (e.g., 'CRITICAL_PROCESS_DIED'). It's the most important clue." },
                    { title: "Restart the Computer", description: "Often, a BSOD is a one-time event. A simple restart may resolve the issue." },
                    { title: "Undo Recent Changes", description: "Did you just install a new program, driver, or piece of hardware? Try uninstalling it. If you can't boot normally, use Safe Mode." },
                    { title: "Check for Hardware Issues", description: "Run the Windows Memory Diagnostic tool to check your RAM. Overheating can also cause crashes, so ensure your laptop's vents are clean." },
                    { title: "Update Drivers", description: "Outdated or corrupt drivers are a common cause of BSODs. Update all device drivers, especially graphics and storage drivers." },
                    { title: "Run System File Checker", description: "Open Command Prompt as admin and run 'sfc /scannow' to check for and repair corrupt system files." },
                    { title: "Check Event Viewer", description: "Look in Windows Event Viewer for additional error details that occurred around the time of the BSOD." }
                ]
            },
            {
                category: "System Errors",
                title: "Windows Won't Boot - Stuck on Loading Screen",
                description: "When Windows gets stuck during startup, these steps can help you get back into your system.",
                imageUrl: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                categoryColor: "text-red-600",
                featured: true,
                solution: [
                    { title: "Force Restart", description: "Hold the power button for 10 seconds to force shutdown, then restart. Sometimes this resolves temporary boot issues." },
                    { title: "Boot into Safe Mode", description: "Restart and repeatedly press F8 (or Shift+F8) during boot to access Advanced Boot Options and select Safe Mode." },
                    { title: "Use Startup Repair", description: "From Advanced Boot Options, select 'Repair Your Computer' and run Startup Repair to fix boot issues automatically." },
                    { title: "Check Recently Installed Software", description: "In Safe Mode, uninstall any recently installed programs or drivers that might be causing the boot problem." },
                    { title: "Run System Restore", description: "Use System Restore to revert your computer to a previous working state before the boot issues began." },
                    { title: "Check Hard Drive", description: "Run CHKDSK from Command Prompt to check for and repair hard drive errors that might prevent booting." },
                    { title: "Rebuild Boot Configuration", description: "Use bootrec commands (bootrec /fixmbr, bootrec /fixboot, bootrec /rebuildbcd) to repair boot configuration." }
                ]
            },
            {
                category: "System Errors",
                title: "My Laptop Won't Shut Down Properly",
                description: "If your laptop hangs on the 'Shutting down' screen, here's what you can do to fix it.",
                imageUrl: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                categoryColor: "text-red-600",
                featured: false,
                solution: [
                    { title: "Force a Shutdown", description: "Press and hold the physical power button for 5-10 seconds until the laptop turns off completely." },
                    { title: "Disable Fast Startup (Windows)", description: "Go to Power Options in the Control Panel, click 'Choose what the power buttons do', and uncheck 'Turn on fast startup'." },
                    { title: "Run the Power Troubleshooter", description: "In Windows Settings, go to Update & Security > Troubleshoot > Additional troubleshooters, and run the Power troubleshooter." },
                    { title: "Update the BIOS/UEFI", description: "Check your laptop manufacturer's website for any BIOS updates, as these can fix power management issues. Follow instructions carefully." },
                    { title: "Check for Problematic Programs", description: "Some programs prevent shutdown. Check Task Manager for programs that won't close and end them manually." },
                    { title: "Update Windows", description: "Install all available Windows updates as they often include fixes for shutdown issues." }
                ]
            },
            {
                category: "System Errors",
                title: "Fixing the 'Black Screen of Death'",
                description: "Your laptop is on, but the screen is black. Here's how to troubleshoot this common issue.",
                imageUrl: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                categoryColor: "text-red-600",
                featured: false,
                solution: [
                    { title: "Check Display Brightness", description: "It's possible the brightness has been turned all the way down. Use the function keys on your keyboard to increase it." },
                    { title: "Try to Wake the Display", description: "Press the Windows key + Ctrl + Shift + B. This key combination restarts the graphics driver and can often fix a black screen." },
                    { title: "Connect to an External Monitor", description: "Use an HDMI or other video cable to connect to an external TV or monitor. If the external display works, the issue is likely with your laptop's screen or its connection." },
                    { title: "Boot into Safe Mode", description: "If you can see something on an external monitor, try booting into Safe Mode. If the screen works in Safe Mode, a software or driver issue is the likely culprit." },
                    { title: "Update Graphics Drivers", description: "In Safe Mode or using an external monitor, update your graphics drivers from the manufacturer's website." },
                    { title: "Check for Loose Connections", description: "If you're comfortable opening your laptop, check that the display cable is properly connected to the motherboard." }
                ]
            },
            {
                category: "System Errors",
                title: "Windows Update Problems and Errors",
                description: "When Windows updates fail or cause issues, here's how to resolve them.",
                imageUrl: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                categoryColor: "text-red-600",
                featured: false,
                solution: [
                    { title: "Run Windows Update Troubleshooter", description: "Go to Settings > Update & Security > Troubleshoot and run the Windows Update troubleshooter." },
                    { title: "Clear Windows Update Cache", description: "Stop Windows Update service, delete contents of C:\\Windows\\SoftwareDistribution, then restart the service." },
                    { title: "Free Up Disk Space", description: "Ensure you have enough free space on your system drive. Windows updates require significant temporary space." },
                    { title: "Reset Windows Update Components", description: "Use the Windows Update Reset script or manually reset update components using Command Prompt." },
                    { title: "Check Date and Time", description: "Incorrect system date and time can cause update failures. Ensure your system clock is accurate." },
                    { title: "Install Updates Manually", description: "Download problematic updates manually from Microsoft Update Catalog and install them directly." }
                ]
            },
            {
                category: "System Errors",
                title: "DLL Errors and Missing Files",
                description: "When you get DLL error messages, here's how to fix missing or corrupt system files.",
                imageUrl: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                categoryColor: "text-red-600",
                featured: false,
                solution: [
                    { title: "Run System File Checker", description: "Open Command Prompt as administrator and run 'sfc /scannow' to scan for and repair corrupt system files." },
                    { title: "Use DISM Tool", description: "Run 'DISM /Online /Cleanup-Image /RestoreHealth' in Command Prompt to repair the Windows image." },
                    { title: "Reinstall the Problematic Program", description: "If a specific program is causing DLL errors, try uninstalling and reinstalling it." },
                    { title: "Update Windows", description: "Install all available Windows updates as they often include updated system files and DLLs." },
                    { title: "Download DLL from Official Source", description: "Only download missing DLLs from official Microsoft sources or the original software manufacturer." },
                    { title: "Check for Malware", description: "Run a full antivirus scan as malware can corrupt or delete system files." }
                ]
            }
        ]
    },
    {
        title: "Software Issues",
        desc: "App errors, updates",
        iconPath: "M9.75 3H4.5A2.25 2.25 0 002.25 5.25v13.5A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V10.5M9.75 3L9 7.5h6L14.25 3M13.5 21v-6h-3v6",
        guides: [
            {
                category: "Software",
                title: "What to Do When an Application Freezes",
                description: "An unresponsive program can be frustrating. Here's how to handle it without restarting your whole system.",
                imageUrl: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                categoryColor: "text-violet-500",
                featured: false,
                solution: [
                    { title: "Wait a Moment", description: "Sometimes a program is just busy processing a task. Give it a minute to see if it becomes responsive again." },
                    { title: "Use the Force Quit Shortcut", description: "On Windows, press Ctrl+Shift+Esc to open Task Manager. On macOS, press Cmd+Option+Esc. Select the frozen application and end the task." },
                    { title: "Check for Updates", description: "If an app freezes frequently, check if there's an update available from the developer, as this can fix known bugs." },
                    { title: "Reinstall the Application", description: "If problems persist, try uninstalling and then reinstalling the program. This can fix corrupted files." },
                    { title: "Check System Resources", description: "Open Task Manager to see if your system is low on memory or CPU resources, which can cause applications to freeze." },
                    { title: "Run in Compatibility Mode", description: "For older programs, try running them in compatibility mode for an earlier version of Windows." }
                ]
            },
            {
                category: "Software",
                title: "Browser Crashes and Won't Open",
                description: "When your web browser keeps crashing or won't start, these steps can help restore it.",
                imageUrl: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                categoryColor: "text-violet-500",
                featured: true,
                solution: [
                    { title: "Restart Your Computer", description: "A simple restart can resolve temporary issues that prevent the browser from starting properly." },
                    { title: "Clear Browser Data", description: "Clear cache, cookies, and browsing data. This can resolve issues caused by corrupted stored data." },
                    { title: "Disable Extensions", description: "Start the browser in safe mode or disable all extensions, then re-enable them one by one to identify problematic ones." },
                    { title: "Update the Browser", description: "Ensure you're running the latest version of your browser, as updates often fix stability issues." },
                    { title: "Reset Browser Settings", description: "Reset the browser to default settings to undo any configuration changes that might be causing crashes." },
                    { title: "Check for Malware", description: "Run a full antivirus scan as malware can interfere with browser operation." },
                    { title: "Reinstall the Browser", description: "As a last resort, completely uninstall and reinstall the browser to fix any corrupted files." }
                ]
            },
            {
                category: "Software",
                title: "Can't Install or Uninstall Programs",
                description: "When software installation or removal fails, here's how to resolve the issue.",
                imageUrl: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                categoryColor: "text-violet-500",
                featured: false,
                solution: [
                    { title: "Run as Administrator", description: "Right-click the installer or uninstaller and select 'Run as administrator' to ensure proper permissions." },
                    { title: "Check Available Disk Space", description: "Ensure you have enough free disk space for the installation. Clean up temporary files if needed." },
                    { title: "Disable Antivirus Temporarily", description: "Sometimes antivirus software blocks installations. Temporarily disable it during installation, then re-enable it." },
                    { title: "Use Windows Installer Cleanup", description: "For stubborn programs, use the Microsoft Program Install and Uninstall troubleshooter." },
                    { title: "Check Windows Installer Service", description: "Ensure the Windows Installer service is running. Go to Services and start it if it's stopped." },
                    { title: "Use Safe Mode", description: "Try installing or uninstalling in Safe Mode to avoid interference from other programs." }
                ]
            },
            {
                category: "Software",
                title: "How to Restore a Previous Version in Google Docs & Sheets",
                description: "Accidentally deleted something important or made a mistake? Learn how to use Version History to go back in time and restore your file.",
                imageUrl: "https://images.pexels.com/photos/5926395/pexels-photo-5926395.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                categoryColor: "text-violet-500",
                featured: true,
                solution: [
                    { 
                        title: "Step 1: Open the Correct Google Doc or Sheet", 
                        description: "First, open the file where the mistake was made. You must be inside the specific document to see its history." 
                    },
                    { 
                        title: "Step 2: Access 'Version history'", 
                        description: "In the menu at the top of the screen, click on 'File', then hover over 'Version history', and in the new menu that appears, click on 'See version history'." 
                    },
                    { 
                        title: "Step 3: Find the Version You Want to Restore", 
                        description: "A panel will open on the right side of your screen showing a timeline of all saved changes, grouped by date and the person who made them. Click on different timestamps to preview what the document looked like at that exact moment." 
                    },
                    { 
                        title: "Step 4: Click 'Restore this version'", 
                        description: "Once you have found the correct version you want to go back to, click the large green or blue 'Restore this version' button at the top of the screen. Your document will instantly revert to that saved point." 
                    },
                    { 
                        title: "Pro-Tip: Name Important Versions", 
                        description: "To make it easy to find important checkpoints (like a final draft), you can name a version. In the 'Version history' panel, click the three dots next to a specific version and select 'Name this version'." 
                    }
                ]
            }
        ]
    },
    {
        title: "Hardware Malfunctions",
        desc: "Keyboard, trackpad issues",
        iconPath: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z",
        guides: [
            {
                category: "Hardware",
                title: "Troubleshooting an Unresponsive Keyboard",
                description: "When your keys stop working, it can bring your work to a halt. Here are the common fixes.",
                imageUrl: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                categoryColor: "text-gray-600",
                featured: false,
                solution: [
                    { title: "Restart Your Laptop", description: "A simple reboot can often resolve temporary driver glitches that cause the keyboard to stop working." },
                    { title: "Check for Debris", description: "Turn the laptop upside down and gently shake it to dislodge any crumbs or debris. Use compressed air for a more thorough cleaning." },
                    { title: "Update or Reinstall Keyboard Drivers", description: "Go to Device Manager (Windows), find your keyboard, and choose to 'Update driver'. If that doesn't work, you can also try uninstalling it and restarting; Windows will reinstall it automatically." },
                    { title: "Test with an External Keyboard", description: "Plug in a USB keyboard. If the external keyboard works, it's a strong indicator that the laptop's internal keyboard has a hardware failure." },
                    { title: "Check for Stuck Keys", description: "Examine each key to see if any are physically stuck. Gently press around stuck keys to free them." },
                    { title: "Run Keyboard Troubleshooter", description: "Use Windows built-in keyboard troubleshooter in Settings > Update & Security > Troubleshoot." }
                ]
            },
            {
                category: "Hardware",
                title: "How to Fix a Flickering Laptop Screen",
                description: "A flickering screen is annoying and can be a sign of a deeper issue. Let's find the cause.",
                imageUrl: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                categoryColor: "text-gray-600",
                featured: false,
                solution: [
                    { title: "Check for Loose Cables", description: "If you use an external monitor, ensure the video cable is securely connected at both ends." },
                    { title: "Update Your Graphics Driver", description: "An outdated or corrupt display driver is a very common cause. Go to your manufacturer's website (NVIDIA, AMD, Intel) and download the latest driver." },
                    { title: "Check for App Incompatibility", description: "In Windows, open Task Manager (Ctrl+Shift+Esc). If Task Manager flickers, it's likely a driver issue. If it doesn't, a specific application is likely the cause." },
                    { title: "Adjust the Screen Refresh Rate", description: "Go to Display Settings > Advanced display settings and try selecting a different refresh rate to see if it solves the problem." },
                    { title: "Check Display Cable", description: "The internal display cable might be loose. This usually requires professional repair if the issue persists." },
                    { title: "Test External Monitor", description: "Connect an external monitor to see if the flickering occurs there too. This helps determine if it's a hardware or software issue." }
                ]
            },
            {
                category: "Hardware",
                title: "Webcam Not Working or Detected",
                description: "Solve issues with your built-in webcam for video calls and meetings.",
                imageUrl: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                categoryColor: "text-gray-600",
                featured: false,
                solution: [
                    { title: "Check for a Physical Shutter", description: "Many modern laptops have a physical sliding shutter over the webcam. Make sure it's open." },
                    { title: "Check App Permissions", description: "In Windows (Settings > Privacy > Camera) or macOS (System Preferences > Security & Privacy > Camera), ensure the app you're using has permission to access the webcam." },
                    { title: "Update or Reinstall Webcam Drivers", description: "In Device Manager (Windows), find your camera under 'Cameras' or 'Imaging devices'. Try updating the driver, or uninstalling it and restarting the laptop." },
                    { title: "Check for Function Key Toggles", description: "Some laptops have a function key (e.g., F8 or F10) that enables or disables the webcam. Look for a camera icon on your keyboard." },
                    { title: "Close Other Camera Apps", description: "Only one application can use the webcam at a time. Close any other apps that might be using the camera." },
                    { title: "Test with Different Apps", description: "Try the webcam with different applications (Camera app, Skype, etc.) to see if the issue is app-specific." }
                ]
            },
            {
                category: "Hardware",
                title: "Laptop Touchpad Not Responding",
                description: "If your cursor is stuck, try these steps to get your trackpad working again.",
                imageUrl: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                categoryColor: "text-gray-600",
                featured: true,
                solution: [
                    { title: "Check for a Touchpad Toggle Key", description: "Look for a function key (often F7, F9, or Fn+F5) with an icon of a touchpad. Pressing it may have accidentally disabled your trackpad." },
                    { title: "Check Your Settings", description: "Go to Settings > Devices > Touchpad (Windows) or System Preferences > Trackpad (macOS) and ensure the touchpad is enabled." },
                    { title: "Update Touchpad Drivers", description: "Find your touchpad in the Device Manager (often under 'Mice and other pointing devices' or 'Human Interface Devices') and check for driver updates." },
                    { title: "Disconnect External Mice", description: "Some laptops automatically disable the touchpad when an external USB or Bluetooth mouse is connected. Disconnect it and see if the touchpad reactivates." },
                    { title: "Clean the Touchpad", description: "Clean the touchpad surface with a slightly damp cloth to remove any dirt or oils that might interfere with touch detection." },
                    { title: "Restart Your Laptop", description: "A simple restart can resolve temporary driver or software issues affecting the touchpad." }
                ]
            },
            {
                category: "Hardware",
                title: "No Sound or Audio Issues",
                description: "When your laptop's speakers aren't working, here's how to restore audio.",
                imageUrl: "https://images.pexels.com/photos/159613/ghettoblaster-radio-recorder-boombox-159613.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                categoryColor: "text-gray-600",
                featured: true,
                solution: [
                    { title: "Check Volume Settings", description: "Ensure the volume isn't muted or turned all the way down. Check both the system volume and application-specific volume controls." },
                    { title: "Check Audio Output Device", description: "Right-click the speaker icon in the system tray and ensure the correct audio device is selected as the default." },
                    { title: "Update Audio Drivers", description: "Go to Device Manager, find your audio device under 'Sound, video and game controllers', and update the driver." },
                    { title: "Run Audio Troubleshooter", description: "Use Windows built-in audio troubleshooter: Settings > Update & Security > Troubleshoot > Playing Audio." },
                    { title: "Restart Audio Services", description: "Open Services, find 'Windows Audio' and 'Windows Audio Endpoint Builder', and restart both services." },
                    { title: "Check for Physical Damage", description: "Test with headphones to see if the issue is with the speakers or the entire audio system." }
                ]
            },
            {
                category: "Hardware",
                title: "USB Ports Not Working",
                description: "When your USB devices aren't being recognized, these steps can help restore functionality.",
                imageUrl: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                categoryColor: "text-gray-600",
                featured: false,
                solution: [
                    { title: "Try Different USB Ports", description: "Test your device in different USB ports to see if the issue is with a specific port or all ports." },
                    { title: "Test with Different Devices", description: "Try different USB devices to determine if the issue is with the port or the specific device." },
                    { title: "Update USB Drivers", description: "In Device Manager, expand 'Universal Serial Bus controllers' and update all USB-related drivers." },
                    { title: "Disable Power Management", description: "In Device Manager, find USB Root Hubs, go to Properties > Power Management, and uncheck 'Allow the computer to turn off this device'." },
                    { title: "Reset USB Ports", description: "Uninstall all USB controllers in Device Manager, then restart your computer to reinstall them automatically." },
                    { title: "Check for Physical Damage", description: "Inspect USB ports for physical damage, debris, or bent connectors that might prevent proper connection." }
                ]
            }
        ]
    },
    {
        title: "Display Issues",
        desc: "Screen problems, resolution",
        iconPath: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        guides: [
            {
                category: "Display",
                title: "Screen Resolution Problems",
                description: "Fix issues with incorrect screen resolution, blurry text, or display scaling problems.",
                imageUrl: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                categoryColor: "text-purple-600",
                featured: false,
                solution: [
                    { title: "Update Graphics Drivers", description: "Download and install the latest graphics drivers from your GPU manufacturer's website (NVIDIA, AMD, or Intel)." },
                    { title: "Adjust Display Settings", description: "Right-click desktop > Display settings, and select the recommended resolution for your monitor." },
                    { title: "Check Scaling Settings", description: "In Display settings, adjust the scaling percentage if text and icons appear too small or too large." },
                    { title: "Reset Display Settings", description: "If custom settings are causing issues, reset to default display settings." },
                    { title: "Check Cable Connections", description: "For external monitors, ensure video cables are securely connected and not damaged." },
                    { title: "Test Different Resolutions", description: "Try different resolution settings to find one that works properly with your display." }
                ]
            },
            {
                category: "Display",
                title: "Dual Monitor Setup Issues",
                description: "Resolve problems with setting up and using multiple monitors with your laptop.",
                imageUrl: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                categoryColor: "text-purple-600",
                featured: false,
                solution: [
                    { title: "Check Physical Connections", description: "Ensure all monitor cables are properly connected to both the laptop and monitors." },
                    { title: "Detect Displays", description: "Go to Display settings and click 'Detect' to force Windows to search for connected monitors." },
                    { title: "Update Graphics Drivers", description: "Install the latest graphics drivers to ensure proper multi-monitor support." },
                    { title: "Configure Display Mode", description: "Choose between Duplicate, Extend, or Second screen only modes based on your needs." },
                    { title: "Set Primary Display", description: "Designate which monitor should be your main display in the Display settings." },
                    { title: "Adjust Individual Settings", description: "Configure resolution, orientation, and scaling for each monitor independently." }
                ]
            },
            {
                category: "Display",
                title: "Screen Brightness Won't Adjust",
                description: "Fix issues when you can't change your laptop screen's brightness using function keys or settings.",
                imageUrl: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                categoryColor: "text-purple-600",
                featured: false,
                solution: [
                    { title: "Update Display Drivers", description: "Install the latest display drivers from your laptop manufacturer's website." },
                    { title: "Check Function Keys", description: "Try different combinations of Fn key + brightness keys (usually F1-F12 with sun icons)." },
                    { title: "Use Windows Settings", description: "Go to Settings > System > Display and adjust brightness using the slider." },
                    { title: "Update BIOS", description: "Check for BIOS updates that might fix brightness control issues." },
                    { title: "Check Power Settings", description: "Ensure power plan settings aren't overriding brightness controls." },
                    { title: "Reinstall Display Drivers", description: "Uninstall display drivers in Device Manager and restart to reinstall them automatically." }
                ]
            }
        ]
    },
    {
        title: "Storage Issues",
        desc: "Disk space, drive problems",
        iconPath: "M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z",
        guides: [
            {
                category: "Storage",
                title: "Free Up Disk Space on Your Laptop",
                description: "When your hard drive is full, here's how to reclaim valuable storage space.",
                imageUrl: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                categoryColor: "text-indigo-600",
                featured: true,
                solution: [
                    { title: "Run Disk Cleanup", description: "Use Windows Disk Cleanup tool to remove temporary files, system files, and empty the Recycle Bin." },
                    { title: "Uninstall Unused Programs", description: "Go to Settings > Apps and uninstall programs you no longer use, especially large ones." },
                    { title: "Clear Browser Data", description: "Clear cache, cookies, and download history from all your web browsers." },
                    { title: "Move Files to External Storage", description: "Transfer large files like videos, photos, and documents to external drives or cloud storage." },
                    { title: "Use Storage Sense", description: "Enable Windows Storage Sense to automatically clean up temporary files and manage storage." },
                    { title: "Clean System Files", description: "In Disk Cleanup, click 'Clean up system files' to remove Windows update files and other system temporary files." }
                ]
            },
            {
                category: "Storage",
                title: "Hard Drive Making Strange Noises",
                description: "Unusual sounds from your hard drive could indicate serious problems. Here's what to do.",
                imageUrl: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                categoryColor: "text-indigo-600",
                featured: false,
                solution: [
                    { title: "Backup Data Immediately", description: "Strange noises often indicate drive failure. Back up important data to external storage or cloud services right away." },
                    { title: "Run Check Disk", description: "Use CHKDSK command to scan for and repair disk errors that might be causing the noise." },
                    { title: "Check Drive Health", description: "Use tools like CrystalDiskInfo to check the SMART status and health of your hard drive." },
                    { title: "Reduce Drive Usage", description: "Avoid heavy disk operations and consider using the laptop minimally until you can replace the drive." },
                    { title: "Professional Assessment", description: "If noises persist, consult a professional for drive replacement before complete failure occurs." },
                    { title: "Consider SSD Upgrade", description: "Replace the failing drive with a solid-state drive (SSD) for better reliability and performance." }
                ]
            },
            {
                category: "Storage",
                title: "Accidentally Deleted Important Files",
                description: "Don't panic! Here's how to recover deleted files before they're permanently lost.",
                imageUrl: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                categoryColor: "text-indigo-600",
                featured: false,
                solution: [
                    { title: "Check Recycle Bin", description: "First, check the Recycle Bin to see if the deleted files are still there and can be easily restored." },
                    { title: "Stop Using the Computer", description: "Minimize disk activity to prevent overwriting the deleted file data, which increases recovery chances." },
                    { title: "Use File History", description: "If you have File History enabled, you can restore previous versions of files from backup." },
                    { title: "Try System Restore", description: "Use System Restore to revert your computer to a previous state when the files existed." },
                    { title: "Use Recovery Software", description: "Try free recovery tools like Recuva or PhotoRec to scan for and recover deleted files." },
                    { title: "Check Cloud Backups", description: "Look in cloud storage services (OneDrive, Google Drive, etc.) for backed-up versions of your files." }
                ]
            }
        ]
    },
    {
        title: "Meeting & Presentation Setup",
        desc: "Projectors, audio, video conferencing",
        iconPath: "M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0M21 3H3v12h18V3z",
        guides: [
            {
                category: "Meeting Setup",
                title: "How to Set Up the Computer and Projector",
                description: "A step-by-step guide for connecting the computer to the projector for a meeting when the remote is unavailable.",
                imageUrl: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                categoryColor: "text-cyan-600",
                featured: true,
                solution: [
                    { title: "Power On All Devices", description: "Before starting, turn on the computer, the projector, and the Alexa speaker. Allow a few minutes for the projector to warm up and fully turn on." },
                    { title: "Select HDMI Input on Projector", description: "On the projector itself, find the arrow buttons. Press the input/source button to see the options. Use the circular navigation buttons to highlight 'HDMI' and press 'OK'. The projector will now connect to the computer." },
                    { title: "Wake and Log In to the Computer", description: "The keyboard and mouse are always connected. Press any key or click the mouse to wake the computer. Log in using the office password." },
                    { title: "Set Up the Camera with OBSOT Centre", description: "Open the 'OBSOT Centre' application. Click the camera icon to open a preview window. Select 'Preset 3' for a standard view, or use the circular motion buttons to manually adjust the camera. Close the small preview window when finished." },
                    { title: "Join Your Meeting", description: "Minimize the OBSOT Centre (do not close it). Open Google Chrome, go to your Calendar, find the event, and join the meeting. Once joined, double-check that the camera angle is correct." },
                    { title: "Troubleshooting: No Sound from Alexa", description: "If there is no sound, click the Bluetooth icon in the system tray. Make sure the computer is connected to the Alexa device. If not, select it from the list to connect." },
                    { title: "Troubleshooting: Microphone Not Working", description: "In your meeting's audio settings, ensure the microphone input source is set to 'USB 3.0' and not any other option." }
                ]
            }
        ]
    },
    {
        title: "Security & Malware",
        desc: "Virus removal, account safety",
        iconPath: "M12 15l-3.262 3.263a2.25 2.25 0 01-3.182 0l-3.263-3.262a2.25 2.25 0 010-3.182l3.262-3.263a2.25 2.25 0 013.182 0L12 11.818V15zm0 0h.01m6.093-6.093a2.25 2.25 0 00-3.182 0l-3.263 3.262a2.25 2.25 0 000 3.182l3.262 3.263a2.25 2.25 0 003.182 0l3.263-3.262a2.25 2.25 0 000-3.182l-3.262-3.263z",
        guides: [
            {
                category: "Security",
                title: "How to Remove a Virus or Malware",
                description: "Your computer is acting strange? Follow these steps to scan for and remove malicious software.",
                imageUrl: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                categoryColor: "text-rose-600",
                featured: true,
                solution: [
                    { title: "Disconnect from the Internet", description: "Immediately disconnect your Wi-Fi or unplug your Ethernet cable to prevent the malware from spreading or sending out your data." },
                    { title: "Boot into Safe Mode", description: "Restart your computer in Safe Mode with Networking. This loads only essential services and can prevent some malware from running." },
                    { title: "Run a Full Malware Scan", description: "Use your primary antivirus software to run a comprehensive, full system scan. Don't use a quick scan." },
                    { title: "Use a Second Opinion Scanner", description: "Download and run a second, on-demand scanner like Malwarebytes to catch anything your primary antivirus might have missed." },
                    { title: "Clear Browser Cache and Change Passwords", description: "After cleaning the system, clear your browser's cache and change the passwords for all your important online accounts (email, banking, social media)." }
                ]
            },
            {
                category: "Security",
                title: "How to Spot and Report a Phishing Email",
                description: "Learn the key signs of a phishing email and follow our official company procedure for reporting it safely.",
                imageUrl: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                categoryColor: "text-rose-600",
                featured: true,
                solution: [
                    { 
                        title: "Sign 1: Check the Sender's Full Email Address", 
                        description: "Don't just look at the display name. Check if the email address itself is misspelled, from a public domain (@gmail.com instead of a company one), or looks suspicious." 
                    },
                    { 
                        title: "Sign 2: Watch for Urgent or Threatening Language", 
                        description: "Be cautious with emails that create panic with phrases like 'Immediate Action Required' or 'Your Account Will Be Suspended'. This is a common tactic to make you act without thinking." 
                    },
                    { 
                        title: "Sign 3: Hover Over Links Before Clicking", 
                        description: "Always hover your mouse over a link to see the actual web address it leads to. If the destination looks unfamiliar, suspicious, or different from the link text, DO NOT CLICK." 
                    },
                    { 
                        title: "Sign 4: Be Wary of Unexpected Attachments", 
                        description: "Do not open attachments you weren't expecting, especially files like .zip or .exe. Even Word or PDF files can be dangerous from an unknown sender." 
                    },
                    { 
                        title: "Sign 5: Look for Generic Greetings and Mistakes", 
                        description: "Phishing emails often use generic greetings like 'Dear Customer' instead of your name, and may contain obvious spelling or grammar errors." 
                    },
                    { 
                        title: "What To Do: Step 1 - DO NOT Interact", 
                        description: "This is the most critical rule. DO NOT click any links, DO NOT open any attachments, and DO NOT reply to the email. Any interaction is a risk." 
                    },
                    { 
                        title: "What To Do: Step 2 - REPORT the Email Immediately", 
                        description: "To protect our organization, immediately forward the suspicious email to our dedicated security address: [security@yourcompany.com]. This allows our team to investigate." 
                    },
                    { 
                        title: "What To Do: Step 3 - Delete After Reporting", 
                        description: "Once you have forwarded the email to the security team, delete it from your inbox. Then, be sure to empty it from your 'Deleted Items' or 'Trash' folder." 
                    }
                ]
            }
        ]
    },
    {
        title: "User Accounts & Security",
        desc: "Managing users, passwords, and data safety",
        iconPath: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z",
        guides: [
            {
                category: "User Accounts",
                title: "How to Safely Remove an Employee's Account from a Windows PC",
                description: "A step-by-step guide for offboarding an employee and securely removing their user profile and data from a company computer.",
                imageUrl: "https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                categoryColor: "text-sky-600",
                featured: true,
                solution: [
                    { 
                        title: "Step 1: Back Up the User's Data (CRITICAL)", 
                        description: "Before doing anything else, log in as the departing employee. Copy all essential work-related files to a secure location, such as an external hard drive, a shared network drive, or the company's cloud storage. IMPORTANT: This data will be permanently deleted from the PC in the final step." 
                    },
                    { 
                        title: "Step 2: Sign Out of the Employee's Account", 
                        description: "Once you have confirmed that all necessary data has been safely transferred and backed up, sign out of the employee's user profile to return to the Windows login screen." 
                    },
                    { 
                        title: "Step 3: Log In as an Administrator", 
                        description: "On the login screen, select an account with administrative privileges. You may need to get the password for this account from your Tech or Operations team." 
                    },
                    { 
                        title: "Step 4: Navigate to Account Settings", 
                        description: "Once logged in as an administrator, open the 'Settings' app (click the Start Menu and select the gear icon). Inside Settings, click on 'Accounts'." 
                    },
                    { 
                        title: "Step 5: Find the Account to Remove", 
                        description: "In the Accounts menu, click on 'Family & other users' from the left-hand sidebar. This will show you a list of all non-administrator user accounts on the computer." 
                    },
                    { 
                        title: "Step 6: Remove the Account and Data", 
                        description: "Click on the employee's account you wish to remove, then click the 'Remove' button. A confirmation window will appear warning that this will delete all of the user's data. Click 'Delete account and data' to complete the process." 
                    }
                ]
            }
        ]
    },
    {
        title: "Printing Problems",
        desc: "Paper jams, not printing, offline errors",
        iconPath: "M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z",
        guides: [
            {
                category: "Printing",
                title: "My Document Won't Print: A Step-by-Step Checklist",
                description: "Follow these common troubleshooting steps when your print job fails to appear.",
                imageUrl: "https://images.pexels.com/photos/1036804/pexels-photo-1036804.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                categoryColor: "text-slate-500",
                featured: true,
                solution: [
                    { title: "Check the Printer's Display", description: "First, look at the printer's screen. It will often tell you the exact problem, such as 'Out of Paper', 'Paper Jam', or 'Low Toner'." },
                    { title: "Ensure the Correct Printer is Selected", description: "In the print dialog box on your computer, double-check that you have selected the correct office printer and not 'Microsoft Print to PDF' or another device." },
                    { title: "Check the Print Queue", description: "Open the print queue on your computer to see if your document is stuck. If there is a long list of old jobs, right-click and 'Cancel All Documents' to clear it." },
                    { title: "Restart the 'Print Spooler' Service", description: "On Windows, search for 'Services', find 'Print Spooler' in the list, right-click it, and select 'Restart'. This resolves many printing glitches." },
                    { title: "Check Connections and Power", description: "Make sure the printer is turned on and that the network or USB cable is securely connected." },
                    { title: "Restart the Printer and Your Computer", description: "The classic fix. Turn the printer off, wait 30 seconds, and turn it back on. If that doesn't work, try restarting your computer." }
                ]
            },
            {
                category: "Printing",
                title: "How to Fix an 'Out of Paper' Error",
                description: "A simple guide for when the printer says it's out of paper, even if you think it isn't.",
                imageUrl: "https://images.pexels.com/photos/2034873/pexels-photo-2034873.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                categoryColor: "text-slate-500",
                featured: false,
                solution: [
                    { title: "Step 1: Check the Main Paper Tray", description: "Open the primary paper tray (usually labeled '1' or '2'). If it's empty, load it with the correct size paper (typically A4 for office documents)." },
                    { title: "Step 2: Ensure Paper is Loaded Correctly", description: "If there is paper in the tray, make sure the stack is neat and pushed all the way in. Check that the adjustable paper guides are snug against the sides of the paper." },
                    { title: "Step 3: Check the Manual Feed/Bypass Tray", description: "Sometimes a print job is set to use a special tray. Check the manual feed slot (often a fold-down flap) to see if it's expecting paper there." },
                    { title: "Step 4: Look for Small Paper Jams", description: "A tiny, torn piece of paper stuck near a sensor can trick the printer into thinking it's empty. Carefully look inside the tray area and remove any visible obstructions." },
                    { title: "Step 5: Reset the Printer", description: "After confirming the trays are loaded correctly, turn the printer off, wait 30 seconds, and turn it back on. This will reset the paper sensors." }
                ]
            },
            {
                category: "Printing",
                title: "How to Safely Clear a Paper Jam",
                description: "A step-by-step guide to safely remove stuck paper without damaging your printer.",
                imageUrl: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                categoryColor: "text-slate-500",
                featured: false,
                solution: [
                    { title: "Step 1: Locate the Jam", description: "Look at the printer's display screen. It will often show an animation or indicate the location of the jam (e.g., Tray 2, rear door, fuser unit)." },
                    { title: "Step 2: Open All Access Doors", description: "Carefully open the relevant access doors and trays. Follow the path the paper takes through the printer to find the blockage." },
                    { title: "Step 3: Remove Paper Carefully", description: "Pull the stuck paper out SLOWLY and FIRMLY in the direction of the paper path. Try not to tear it, as small pieces left behind can cause future jams. Use both hands." },
                    { title: "Step 4: Check for Small Torn Pieces", description: "Once the main sheet is out, thoroughly inspect the area for any small, torn fragments of paper that may be left behind in the rollers." },
                    { title: "Step 5: Close All Doors Securely", description: "Once you are certain all paper fragments are removed, close all doors. The printer should automatically detect that the jam is cleared and reset itself." }
                ]
            },
            {
                category: "Printing",
                title: "How to Fix Poor Print Quality (Streaks or Faded Text)",
                description: "Getting streaks, smudges, or faded printouts? Here are the common causes and solutions.",
                imageUrl: "https://images.pexels.com/photos/4009409/pexels-photo-4009409.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                categoryColor: "text-slate-500",
                featured: false,
                solution: [
                    { title: "Step 1: Check Toner/Ink Levels", description: "The most common cause is low toner or ink. Check the printer's display or its status page on your computer to see the current levels." },
                    { title: "Step 2: Gently Shake the Toner Cartridge", description: "For laser printers, you can often get more life out of a low cartridge. Remove the toner cartridge, gently rock it back and forth to redistribute the toner, and reinsert it." },
                    { title: "Step 3: Run the Printer's Cleaning Cycle", description: "Most printers have a built-in maintenance function. Find this in the printer's settings menu on its display and run the 'Clean Printhead' or 'Clean Drum' cycle." },
                    { title: "Step 4: Check EconoMode/Draft Settings", description: "On your computer's print settings, check if 'Toner Save' or 'Draft Mode' is on. This uses less toner and results in a lighter print. Disable it for higher quality." },
                    { title: "Step 5: Check the Paper", description: "Ensure you are using dry, good-quality paper that is suitable for your printer. Damp or incorrect paper can cause smudges and poor quality." }
                ]
            },
            {
                category: "Printing",
                title: "How to Scan a Document (Brother DCP-T820DW)",
                description: "The step-by-step process for scanning a document to your computer using our Brother office printer.",
                imageUrl: "https://images.pexels.com/photos/3825529/pexels-photo-3825529.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                categoryColor: "text-slate-500",
                featured: false,
                solution: [
                    { 
                        title: "Step 1: Place Your Document", 
                        description: "For single pages, lift the cover and place the document face-down on the scanner glass. For multiple pages, place the stack face-up in the Automatic Document Feeder (ADF) on top of the printer." 
                    },
                    { 
                        title: "Step 2: Press the 'Scan' Button on the Printer", 
                        description: "On the printer's control panel, press the physical 'Scan' button. This will show the available scanning options on the LCD screen." 
                    },
                    { 
                        title: "Step 3: Select 'Scan to PC'", 
                        description: "Use the up/down arrow keys on the printer to scroll through the menu. Select the option that says 'Scan to PC' and press the 'OK' button." 
                    },
                    { 
                        title: "Step 4: Select 'Scan to File'", 
                        description: "The next menu will ask what to do on the PC. The most common option is 'Scan to File'. Select this and press 'OK'. This will save the scan as a file on the computer." 
                    },
                    { 
                        title: "Step 5: Press the 'Start' Button", 
                        description: "The printer is now ready. Press the green 'Start' button to begin scanning. The document will be scanned and sent to the connected office computer." 
                    },
                    { 
                        title: "Step 6: Find Your Scanned File on the Computer", 
                        description: "On the computer, the Brother software will pop up with the scanned image. You can save it as a PDF or JPEG. The file is usually saved in your 'Pictures' or 'Documents' folder, inside a folder named 'ControlCenter4'." 
                    }
                ]
            }
        ]
    },
    {
        title: "Peripherals & Accessories",
        desc: "Mouse, keyboard, docks, and external drives",
        iconPath: "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-1.621-.621A3 3 0 0115 18.257V17.25m6-12.75a1.5 1.5 0 01-3 0V6a1.5 1.5 0 013 0v-1.5zm-10.5 0a1.5 1.5 0 01-3 0V6a1.5 1.5 0 013 0v-1.5zM9 12a3 3 0 100-6 3 3 0 000 6z",
        guides: [
            {
                category: "Peripherals",
                title: "Wireless Mouse or Keyboard Not Connecting",
                description: "When your wireless mouse or keyboard stops responding, follow these simple steps to get it working again.",
                imageUrl: "https://images.pexels.com/photos/459762/pexels-photo-459762.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                categoryColor: "text-teal-600",
                featured: true,
                solution: [
                    { 
                        title: "Step 1: Check Power and Batteries", 
                        description: "First, make sure the device is switched ON (look for a small switch on the bottom). A good way to check for power is to look for the red sensor light underneath the mouse. If there is no light, the battery is almost certainly dead and needs to be replaced with a fresh set." 
                    },
                    { 
                        title: "Step 2: Check the USB Receiver", 
                        description: "The small USB dongle that plugs into the computer can sometimes lose connection. Unplug it, wait a few seconds, and plug it back into a DIFFERENT USB port to see if the computer recognizes it." 
                    },
                    { 
                        title: "Step 3: Restart the Computer", 
                        description: "Sometimes the issue is with the device driver. A simple restart of your computer will reload the drivers and can often fix the connection problem without any other effort." 
                    },
                    { 
                        title: "Step 4: Re-pair the Device", 
                        description: "Most wireless devices have a small 'Connect' or 'Pair' button. Press the button on the USB receiver and then the corresponding button on the mouse or keyboard to re-establish the connection." 
                    },
                    { 
                        title: "Step 5: For Bluetooth Devices, Use Settings", 
                        description: "If your device uses Bluetooth (with no USB receiver), go to your computer's Bluetooth settings. Find your device in the list, click to 'Remove' or 'Forget' it, and then pair it again like a new device." 
                    }
                ]
            }
        ]
    },
    {
        title: "Office & Onboarding Guides",
        desc: "Wi-Fi, new setups, and company processes",
        iconPath: "M12 7.5h1.5m-1.5 4.5h1.5m-7.5 0h7.5m-7.5 4.5h7.5m3-12h.008v.008H18V9.75h-.008v.008H18V9.75zm0 3.75h.008v.008H18v-.008h.008v-.008H18v.008zm0 3.75h.008v.008H18v-.008h.008v-.008H18v.008zM4.5 21V5.25A2.25 2.25 0 016.75 3h10.5A2.25 2.25 0 0119.5 5.25V21M4.5 21h15M4.5 21H3v-4.5a2.25 2.25 0 012.25-2.25h.008a2.25 2.25 0 012.25 2.25v4.5",
        guides: [
            {
                category: "Onboarding",
                title: "How to Connect to the Office Wi-Fi (nagaed)",
                description: "A simple guide for employees to connect their new laptops or devices to the primary office Wi-Fi network.",
                imageUrl: "https://images.pexels.com/photos/4464483/pexels-photo-4464483.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                categoryColor: "text-lime-600",
                featured: true,
                solution: [
                    { 
                        title: "Step 1: Open the Wi-Fi Menu", 
                        description: "On your Windows taskbar, at the bottom-right corner of the screen, click on the network icon. This will look like a globe if you are not connected, or a Wi-Fi symbol." 
                    },
                    { 
                        title: "Step 2: Find the 'nagaed' Network", 
                        description: "A list of available Wi-Fi networks will appear. Look for our official office network, which is named 'nagaed', and click on it." 
                    },
                    { 
                        title: "Step 3: Click 'Connect'", 
                        description: "Make sure the 'Connect automatically' box is checked so you don't have to repeat this process every day. Then, click the 'Connect' button." 
                    },
                    { 
                        title: "Step 4: Enter the Password", 
                        description: "The system will now ask for the network password. The current password can be found pasted on the main office router. You can also ask any of your team members for it." 
                    },
                    { 
                        title: "Step 5: Confirm You Are Connected", 
                        description: "Once the password is correct, your device will connect. The network icon in your taskbar should now say 'nagaed - Connected, secured'. You can now open a web browser to test your internet access." 
                    }
                ]
            },
            {
                category: "Onboarding",
                title: "How to Securely Share Files with Google Drive",
                description: "The official company process for sharing large files or sensitive documents with colleagues using our shared Google Drive.",
                imageUrl: "https://images.pexels.com/photos/4197475/pexels-photo-4197475.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                categoryColor: "text-lime-600",
                featured: true,
                solution: [
                    { 
                        title: "Step 1: Use the 'Shared Drive', Not 'My Drive'", 
                        description: "For all official company work, always start in the 'Shared drives' section of Google Drive. This ensures the company retains ownership of the files, even if an employee leaves. Avoid using your personal 'My Drive' for company projects."
                    },
                    { 
                        title: "Step 2: Upload or Create Your Files", 
                        description: "Navigate to the correct project or department folder within the Shared Drive. You can either drag-and-drop your files from your computer or use the '+ New' button to upload or create a new Google Doc, Sheet, or Slide." 
                    },
                    { 
                        title: "Step 3: Open the 'Share' Menu", 
                        description: "Right-click on the file or folder you wish to share, and from the menu, select 'Share'." 
                    },
                    { 
                        title: "Step 4: Add People and Set Permissions", 
                        description: "In the 'Add people and groups' box, type the company email addresses of your colleagues. To the right, choose their permission level: 'Viewer' (can only see), 'Commenter' (can add comments), or 'Editor' (can make changes). Always grant the minimum permission necessary." 
                    },
                    { 
                        title: "Step 5: AVOID 'Anyone with the link' (Important!)", 
                        description: "For security reasons, never change the 'General access' setting to 'Anyone with the link' for internal or sensitive documents. Always share directly with specific people by adding their email addresses." 
                    },
                    { 
                        title: "Step 6: Send the Notification", 
                        description: "Ensure the 'Notify people' box is checked and write a brief message if needed. Click 'Send'. Your colleagues will receive an email with a secure link to the shared file or folder." 
                    }
                ]
            }
        ]
    }
];
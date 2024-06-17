# fucking damnit there's always some bs
- [x] Safari does not like to figure out the tabindex itself, tabbing only work on language and some link. So try to implement a custom tabindex to each (should be) -tabbable item on the site.
    - T'was a fucking stupid problem, Safari does not have tab-access enabled by default. Pricks.

- [o] apparently the "*" to set site-wide font is inefficient, fix that.
    - Ignoring this til' it becomes a problem.

- [o] set the Safari-specific font only on the items that need them, the other should have the default font. (buttons need the the Safari-specific, but email can keep the default font).
    - Ignored for now, since things are working well. If it aint broken...

- [x] language button does not work for first-time visitors for some reason. fix that.

- [!] android (old, atleast) thinks they are desktops, and has the 'hover' query figured out... So buttons and links are 'hovered' when clicked... fix that.
    - this should be fixed with the inclusion of "(pointer: fine)", but remains to be tested (19:33 17.06.2024).

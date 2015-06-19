/**
 * 
 */
package org.eclipsescout.contacts.shared.premium.services;

import java.security.BasicPermission;

/**
 * @author mzi
 */
public class ReadDBInstallPermission extends BasicPermission {

  private static final long serialVersionUID = 1L;

  /**
   * 
   */
  public ReadDBInstallPermission() {
    super("ReadDBInstall");
  }
}
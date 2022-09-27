import type { Component } from "vue";

export interface ElementData {}

export type DataInitializer = () => ElementData;

export interface ElementManifest {
  type: string;
  version: string;
  name: string;
  initState: DataInitializer;
  Edit: Component;
  TopToolbar?: Component;
  SideToolbar?: Component;
  Display: Component;
  ui: {
    icon: string;
    forceFullWidth: boolean;
  };
}
